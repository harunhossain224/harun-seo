import { NextResponse } from "next/server";
import { verifyAdminPassword } from "@/lib/adminStore";

const AUTH_COOKIE_NAME = "harun_admin_auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json({ error: "Password is required" }, { status: 400 });
    }

    if (verifyAdminPassword(password)) {
      const response = NextResponse.json({ success: true, message: "Authentication successful" });
      // Set secure cookie
      response.cookies.set({
        name: AUTH_COOKIE_NAME,
        value: "authenticated_harun_admin",
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: "lax",
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const isAuthenticated = cookieHeader.includes(`${AUTH_COOKIE_NAME}=authenticated_harun_admin`);

  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return response;
}

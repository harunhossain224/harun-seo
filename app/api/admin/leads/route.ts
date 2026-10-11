import { NextResponse } from "next/server";
import { getLeads, updateLeadStatus, deleteLead, Lead } from "@/lib/adminStore";

export async function GET() {
  try {
    const leads = getLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Failed fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Lead ID and status required" }, { status: 400 });
    }

    const updated = updateLeadStatus(id, status as Lead["status"]);
    if (updated) {
      return NextResponse.json({ success: true, message: "Status updated" });
    }
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  } catch (error) {
    console.error("Failed updating lead status:", error);
    return NextResponse.json({ error: "Failed to update lead status" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
    }

    const deleted = deleteLead(id);
    if (deleted) {
      return NextResponse.json({ success: true, message: "Lead deleted" });
    }
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  } catch (error) {
    console.error("Failed deleting lead:", error);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}

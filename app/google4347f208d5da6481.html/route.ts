export async function GET() {
  return new Response("google-site-verification: google4347f208d5da6481.html\n", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

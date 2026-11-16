import { NextResponse } from "next/server";

// Receives contact-form submissions. For now it validates and logs them on the server.
// Next step: forward to email (e.g. Resend / SES) or your CRM.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide your name, a valid email and a message." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  console.log("[contact] new enquiry", { name, email, topic: body?.topic, length: message.length });
  return NextResponse.json({ ok: true });
}

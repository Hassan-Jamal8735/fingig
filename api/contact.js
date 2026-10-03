const MAX_LEN = { name: 100, email: 200, phone: 40, subject: 150, project: 150, source: 100, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true, message: "Thanks! Your message has been sent." });
  }

  const data = {};
  for (const key of Object.keys(MAX_LEN)) data[key] = clean(body[key], MAX_LEN[key]);

  if (!data.name || !data.message || !EMAIL_RE.test(data.email)) {
    return res.status(400).json({ ok: false, error: "Please enter your name, a valid email address and a message." });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.");
    return res.status(500).json({ ok: false, error: "The contact form is not available right now. Please email us directly." });
  }

  const labels = { name: "Name", email: "Email", phone: "Phone", subject: "Subject", project: "Project", source: "Interested in", message: "Message" };
  const rows = Object.keys(labels).filter((k) => data[k]);
  const text = rows.map((k) => `${labels[k]}: ${data[k]}`).join("\n");
  const html = rows
    .map((k) => `<p><strong>${labels[k]}:</strong><br>${escapeHtml(data[k]).replace(/\n/g, "<br>")}</p>`)
    .join("");
  const page = clean(body.page, 100);

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || "FignGig Website <onboarding@resend.dev>",
        to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `New enquiry from ${data.name}${data.subject ? ` - ${data.subject}` : ""}`,
        text: page ? `${text}\n\nSent from: ${page}` : text,
        html: page ? `${html}<p style="color:#888">Sent from: ${escapeHtml(page)}</p>` : html,
      }),
    });
    if (!r.ok) {
      console.error("Resend error", r.status, await r.text());
      return res.status(502).json({ ok: false, error: "Sorry, your message could not be sent. Please try again or email us directly." });
    }
  } catch (err) {
    console.error("Resend request failed", err);
    return res.status(502).json({ ok: false, error: "Sorry, your message could not be sent. Please try again or email us directly." });
  }

  return res.status(200).json({ ok: true, message: "Thanks! Your message has been sent. We'll reply within one business day." });
};

function safeParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

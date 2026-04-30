import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resendApiKey = process.env.RESEND_API_KEY || "dummy-key";

// ⚠️ Use SERVICE ROLE key for backend (not anon)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy-key";

const resend = new Resend(resendApiKey);
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate basic fields
    if (!body.name || !body.email) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // ✅ 1. Save to database
    const { error } = await supabase.from("contacts").insert([
      {
        name: body.name,
        email: body.email,
        purpose: body.purpose,
        project: body.project,
        budget: body.budget,
        timeline: body.timeline,
        message: body.final,
      },
    ]);

    if (error) {
      console.error("DB Error:", error);
      return Response.json({ error: `Database error: ${error.message}` }, { status: 500 });
    }

    // 📩 2. Email to YOU
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["prerna2506@example.com"], // 🔥 replace with your email
      subject: `New Contact: ${body.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Purpose:</b> ${body.purpose}</p>
        <p><b>Budget:</b> ${body.budget}</p>
        <p><b>Timeline:</b> ${body.timeline}</p>
        <p><b>Message:</b> ${body.final}</p>
      `,
    });

    // 🧠 AI Auto-Reply (Smart Responses based on Purpose)
    let smartResponse = "I'll get back to you soon... unless I get kidnapped by bugs in my code 🐛";
    
    if (body.purpose === "Project") {
      smartResponse = "I absolutely love discussing new projects! I'll review your timeline and budget and get back to you with some initial thoughts shortly. 🚀";
    } else if (body.purpose === "Networking") {
      smartResponse = "Awesome! I'm always open to expanding my network and meeting cool people in the space. Let's chat soon! 🧠";
    } else if (body.purpose === "Collaborate") {
      smartResponse = "Collaboration is where the magic happens. I'll take a look at your ideas and follow up soon! 🤝";
    }

    // ✉️ 3. Auto reply to USER
    await resend.emails.send({
      from: "Prerna <onboarding@resend.dev>",
      to: [body.email],
      subject: "Got your message 😄",
      html: `
        <h2>Hey ${body.name} 👋</h2>
        <p>Thanks for reaching out!</p>
        <p>${smartResponse}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("Server Error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

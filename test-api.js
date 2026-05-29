require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js');

async function test() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    console.log("Keys loaded:");
    console.log("Supabase URL:", !!supabaseUrl);
    console.log("Supabase Key:", !!supabaseServiceKey);
    console.log("Resend Key:", !!resendApiKey);

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);

    console.log("Testing Supabase insert...");
    const { error: dbError } = await supabase.from("contacts").insert([{
        name: "Test Name",
        email: "workprerna6@gmail.com",
        message: "Test message"
    }]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
    } else {
      console.log("Supabase Insert Success");
    }

    console.log("Testing Resend...");
    const emailRes = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["workprerna6@gmail.com"],
      subject: "Test",
      html: "<p>Test</p>"
    });

    if (emailRes.error) {
      console.error("Resend Error:", emailRes.error);
    } else {
      console.log("Resend Success:", emailRes.data);
    }

  } catch (err) {
    console.error("Fatal Error:", err);
  }
}
test();

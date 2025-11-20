import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryEmailRequest {
  name: string;
  company?: string;
  email: string;
  whatsapp?: string;
  product?: string;
  quantity?: string;
  sampleRequest: boolean;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const inquiry: InquiryEmailRequest = await req.json();
    console.log("Received inquiry:", inquiry);

    // Send notification email to company
    const companyEmail = await resend.emails.send({
      from: "SAIMPEX Inquiries <onboarding@resend.dev>",
      to: ["info@saimpex.com"], // Replace with actual company email
      subject: `New ${inquiry.sampleRequest ? "Sample Request" : "Inquiry"} from ${inquiry.name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>From:</strong> ${inquiry.name}</p>
        ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
        <p><strong>Email:</strong> ${inquiry.email}</p>
        ${inquiry.whatsapp ? `<p><strong>WhatsApp:</strong> ${inquiry.whatsapp}</p>` : ''}
        ${inquiry.product ? `<p><strong>Product Interest:</strong> ${inquiry.product}</p>` : ''}
        ${inquiry.quantity ? `<p><strong>Quantity:</strong> ${inquiry.quantity}</p>` : ''}
        <p><strong>Sample Request:</strong> ${inquiry.sampleRequest ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${inquiry.message}</p>
      `,
    });

    console.log("Company notification sent:", companyEmail);

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: "SAIMPEX <onboarding@resend.dev>",
      to: [inquiry.email],
      subject: "Thank you for contacting SAIMPEX",
      html: `
        <h1>Thank you for your inquiry, ${inquiry.name}!</h1>
        <p>We have received your ${inquiry.sampleRequest ? 'sample request' : 'inquiry'} and our team will get back to you within 24 hours.</p>
        
        <h2>Your Inquiry Details:</h2>
        ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
        <p><strong>Email:</strong> ${inquiry.email}</p>
        ${inquiry.whatsapp ? `<p><strong>WhatsApp:</strong> ${inquiry.whatsapp}</p>` : ''}
        ${inquiry.product ? `<p><strong>Product:</strong> ${inquiry.product}</p>` : ''}
        ${inquiry.quantity ? `<p><strong>Quantity:</strong> ${inquiry.quantity}</p>` : ''}
        <p><strong>Message:</strong> ${inquiry.message}</p>

        <p>For urgent inquiries, you can also reach us via:</p>
        <p>📞 Phone: +91 123 456 7890</p>
        <p>💬 WhatsApp: <a href="https://wa.me/1234567890">Chat with us</a></p>
        
        <p>Best regards,<br>The SAIMPEX Team</p>
      `,
    });

    console.log("Customer confirmation sent:", customerEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        companyEmailId: companyEmail.data?.id,
        customerEmailId: customerEmail.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-inquiry-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

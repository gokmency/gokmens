// Resend API integration for sending emails
export async function sendEmailWithProxy(data: {
  from: string;
  to: string;
  subject: string;
  html: string;
  name?: string;
  email?: string;
  message?: string;
}) {
  try {
    // Using Resend API directly
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer re_f7aBuNHT_EFwTPxbxeNxvHJrpfNyyfo55`
      },
      body: JSON.stringify({
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: data.html,
        reply_to: data.email
      })
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(responseData.message || "Failed to send email");
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Email service error:", error);
    
    // Fallback to a simpler approach if Resend fails
    try {
      // Using a different endpoint as fallback
      const fallbackResponse = await fetch("https://formsubmit.co/ajax/bgokmencelik@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name || "Website Visitor",
          email: data.email || "noreply@gokmens.com",
          message: data.message || "No message content",
          _subject: data.subject
        })
      });
      
      if (!fallbackResponse.ok) {
        throw new Error("Fallback email service failed");
      }
      
      return { success: true };
    } catch (fallbackError) {
      console.error("Fallback email service error:", fallbackError);
      return { 
        error: true, 
        message: error instanceof Error ? error.message : "An unknown error occurred" 
      };
    }
  }
} 
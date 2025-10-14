export function createWelcomeEmailTemplate(name, clientURL) {
  return `   
  <!DOCTYPE html>
  <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Messenger</title>
      </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
            
            <!-- Header -->
            <tr>
              <td align="center" style="background-color: #4F46E5; padding: 20px;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Welcome</h1>
              </td>
            </tr>
            
            <!-- Content -->
            <tr>
              <td style="background-color: #f9f9f9; padding: 30px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 22px;">Hello ${name}!</h2>
                <p style="margin: 0 0 15px 0; color: #333;">We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time, no matter where they are.</p>
                
                <p style="font-size: 16px; margin: 20px 0 10px 0; color: #333;"><strong>Get started in just a few steps:</strong></p>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 20px 20px;">
                  <tr><td style="padding: 5px 0; color: #333;">• Set up your profile picture</td></tr>
                  <tr><td style="padding: 5px 0; color: #333;">• Find and add your contacts</td></tr>
                  <tr><td style="padding: 5px 0; color: #333;">• Start a conversation</td></tr>
                  <tr><td style="padding: 5px 0; color: #333;">• Share photos, videos, and more</td></tr>
                </table>
                
                <!-- Button -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" style="padding: 30px 0;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" bgcolor="#0066CC" style="padding: 15px 40px;">
                            <a href="${clientURL}" target="_blank" style="font-size: 18px; font-family: Arial, sans-serif; color: #FFFFFF; text-decoration: none; font-weight: bold;">Open Messenger</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <p style="margin: 0 0 5px 0; color: #333;">If you need any help or have questions, we're always here to assist you.</p>
                <p style="margin: 0 0 25px 0; color: #333;">Happy messaging!</p>
                
                <p style="margin: 0; color: #333;">Best regards,<br>The Messenger Team</p>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td align="center" style="padding: 20px; color: #999; font-size: 12px;">
                <p style="margin: 0 0 10px 0;">© 2025 Messenger. All rights reserved.</p>
                <p style="margin: 0;">
                  <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
                  <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                  <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Contact Us</a>
                </p>
              </td>
            </tr>
            
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

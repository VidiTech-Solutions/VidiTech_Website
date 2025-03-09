export const adminEmailTemplate = (
  name,
  email,
  interest,
  budget,
  message,
  interestContent,
  formattedDate,
  savedContactId
) => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; margin: 0 auto;">
    <tr>
      <td style="padding: 20px 0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${interestContent.color}; border-radius: 8px 8px 0 0;">
          <tr>
            <td style="padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 600;">New Project Inquiry ${interestContent.emoji}</h1>
              <p style="color: rgba(255,255,255,0.5); margin: 8px 0 0; font-size: 16px;">${interest} - ${budget}</p>
            </td>
          </tr>
        </table>
        
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: white; border-left: 1px solid #eaeaea; border-right: 1px solid #eaeaea;">
          <tr>
            <td style="padding: 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 25px; background-color: #F3EAFF; border-left: 4px solid ${interestContent.color}; border-radius: 4px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 15px;">
                    <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #4F359B;">
                      <strong>New lead notification:</strong> A potential client has submitted an inquiry through your contact form.
                    </p>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 15px; border-bottom: 1px solid #eaeaea;">
                    <h2 style="margin: 0; font-size: 18px; color: #111827;">Client Information</h2>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 15px 0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="140" style="padding: 8px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Name</td>
                        <td style="padding: 8px 0; font-weight: 600; font-size: 15px; color: #111827;">${name}</td>
                      </tr>
                      <tr>
                        <td width="140" style="padding: 8px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Email</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${email}" style="color: ${interestContent.color}; text-decoration: none; font-weight: 500; font-size: 15px;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td width="140" style="padding: 8px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Service Interest</td>
                        <td style="padding: 8px 0; font-size: 15px; color: #111827;">
                          <span style="display: inline-block; padding: 3px 8px; background-color: rgba(107, 70, 193, 0.15); color: ${interestContent.color}; border-radius: 4px; font-weight: 500;">${interest}</span>
                        </td>
                      </tr>
                      <tr>
                        <td width="140" style="padding: 8px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Budget Range</td>
                        <td style="padding: 8px 0; font-size: 15px; color: #111827;">${budget}</td>
                      </tr>
                      <tr>
                        <td width="140" style="padding: 8px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Submitted On</td>
                        <td style="padding: 8px 0; font-size: 15px; color: #111827;">${formattedDate}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 15px; border-bottom: 1px solid #eaeaea;">
                    <h2 style="margin: 0; font-size: 18px; color: #111827;">Client Message</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px;">
                    <div style="background-color: #F9FAFB; padding: 20px; border-radius: 6px; border: 1px solid #E5E7EB;">
                      <p style="margin: 0; line-height: 1.6; font-size: 15px; color: #111827; white-space: pre-line;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-bottom: 15px; border-bottom: 1px solid #eaeaea;">
                    <h2 style="margin: 0; font-size: 18px; color: #111827;">Recommended Actions</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px;">
                    <ul style="margin: 0; padding: 0 0 0 20px;">
                      <li style="margin-bottom: 10px; color: #4B5563;">
                        <span style="color: #111827;">Respond within 24 hours to maximize conversion potential.</span>
                      </li>
                      <li style="margin-bottom: 10px; color: #4B5563;">
                        <span style="color: #111827;">Prepare a tailored response based on their ${interest} needs.</span>
                      </li>
                      <li style="color: #4B5563;">
                        <span style="color: #111827;">Consider scheduling a discovery call to understand their requirements better.</span>
                      </li>
                    </ul>
                    <div style="margin-top: 25px; text-align: center;">
                      <a href="mailto:${email}?subject=RE: Your ${interest} Inquiry - VidiTech" style="display: inline-block; padding: 12px 24px; background-color: ${interestContent.color}; color: white; font-weight: 600; text-decoration: none; border-radius: 4px;">Reply to Client</a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f5f7; border-radius: 0 0 8px 8px; border: 1px solid #eaeaea; border-top: none;">
          <tr>
            <td style="padding: 15px; text-align: center;">
              <p style="margin: 0 0 5px; font-size: 13px; color: #6B7280;">This is an automated message from the VidiTech contact form.</p>
              <p style="margin: 0; font-size: 13px; color: #6B7280;">Reference ID: <span style="font-family: monospace; font-size: 12px;">${savedContactId}</span></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const clientEmailTemplate = (name, interest, interestContent) => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; margin: 0 auto;">
    <tr>
      <td style="padding: 20px 0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${
          interestContent.color
        }; border-radius: 8px 8px 0 0;">
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700;">VIDITECH</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 18px;">Transforming Digital Experiences</p>
            </td>
          </tr>
        </table>
        
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: white; border-left: 1px solid #eaeaea; border-right: 1px solid #eaeaea;">
          <tr>
            <td style="padding: 40px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h2 style="margin: 0; color: #333; font-size: 24px; font-weight: 600;">Thank You For Your Interest, ${name}!</h2>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 30px;">
                    <p style="margin: 0 0 15px; font-size: 16px; line-height: 1.6; color: #555;">We're excited that you've reached out to us about your <strong>${interest}</strong> needs. Your inquiry has been received, and our team is eager to help you achieve your goals.</p>
                    
                    <p style="margin: 0 0 15px; font-size: 16px; line-height: 1.6; color: #555;">${
                      interestContent.followupText
                    }</p>
                    
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555;">Here's what happens next:</p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 30px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: ${
                                  interestContent.color
                                }; color: white; font-weight: bold; font-size: 18px; text-align: center; line-height: 36px;">1</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333;">Initial Review</p>
                                <p style="margin: 5px 0 0; font-size: 15px; line-height: 1.5; color: #666;">Our team will review your request within 24 hours.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: ${
                                  interestContent.color
                                }; color: white; font-weight: bold; font-size: 18px; text-align: center; line-height: 36px;">2</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333;">Personalized Response</p>
                                <p style="margin: 5px 0 0; font-size: 15px; line-height: 1.5; color: #666;">We'll reach out to discuss your specific needs in detail.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 0;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: ${
                                  interestContent.color
                                }; color: white; font-weight: bold; font-size: 18px; text-align: center; line-height: 36px;">3</div>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333;">Tailored Solution</p>
                                <p style="margin: 5px 0 0; font-size: 15px; line-height: 1.5; color: #666;">We'll work together to develop a customized plan for your success.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 30px; background-color: #f9f9f9; border-radius: 6px; text-align: center;">
                    <p style="margin: 0 0 15px; font-size: 16px; font-weight: 600; color: #333;">Have questions in the meantime?</p>
                    <a href="mailto:info@viditech.online" style="display: inline-block; padding: 12px 24px; background-color: ${
                      interestContent.color
                    }; color: white; font-weight: 600; text-decoration: none; border-radius: 4px;">Contact Us Directly</a>
                    <p style="margin: 15px 0 0; font-size: 15px; color: #666;">Or schedule a call: <a href="https://calendly.com/viditechvd" style="color: ${
                      interestContent.color
                    }; text-decoration: none; font-weight: 500;">Book a Meeting</a></p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-top: 30px;">
                    <p style="margin: 0 0 5px; font-size: 16px; line-height: 1.5; color: #555;">Looking forward to working with you,</p>
                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333;">The VidiTech Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f5f7; border-radius: 0 0 8px 8px; border: 1px solid #eaeaea; border-top: none;">
          <tr>
            <td style="padding: 20px; text-align: center;">
              <p style="margin: 0 0 10px; font-size: 14px; color: #666;">© ${new Date().getFullYear()} VidiTech. All rights reserved.</p>
              <p style="margin: 0; font-size: 12px; color: #999;">This email was sent in response to your contact form submission.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

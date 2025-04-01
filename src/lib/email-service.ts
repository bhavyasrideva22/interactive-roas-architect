
import { RoasData } from "./calculator";

// Simulate email service functionality
export const sendEmail = async (email: string, data: RoasData): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`Sending email to ${email} with data:`, data);
    
    // In a real implementation, this would communicate with a backend service
    // that would use something like Nodemailer, SendGrid, or Mailchimp to send emails
    
    // Simulate a delay for the API call
    setTimeout(() => {
      console.log(`Email successfully sent to ${email}`);
      resolve();
    }, 1500);
  });
};

import { tool } from 'ai';
import { z } from 'zod';
import { sendEmail } from '@/lib/resend';
import { siteConfig } from '@/config/site';

export const bookingTool = tool({
    description: 'Collects user booking info and sends email to client and user',
    inputSchema: z.object({
        name: z.string().describe('Full name of the person booking'),
        email: z.string().email().describe('Email of the person booking'),
        topic: z.string().optional().describe('Topic or reason for consultation'),
        preferredDate: z.string().optional().describe('Preferred date for consultation'),
    }),
    outputSchema: z.object({
        message: z.string().describe('Message to be displayed to the user'),
    }),
    execute: async ({ name, email, topic, preferredDate }) => {
        try {
            // send email to client
            const res = await sendEmail({
                to: siteConfig.author.email, // company's email
                subject: `New Consultation Booking from ${name}`,
                text: `You have a new booking request:

Name: ${name}
Email: ${email}
Topic: ${topic || 'General Consultation'}
Preferred Date: ${preferredDate || 'Not specified'}

Please follow up to confirm.`,
            });

            if (res.error) {
                return { message: `Booking request failed for ${name}.` };
            }

            // send confirmation to user
            const res2 = await sendEmail({
                to: email, // user's email
                subject: 'Your Booking Request is Received',
                text: `Hi ${name},

Thank you for booking a consultation with Oyakganya Consulting Hub! We have received your request and will contact you shortly to confirm.

Topic: ${topic || 'General Consultation'}
Preferred Date: ${preferredDate || 'Not specified'}

Best regards,
Oyakganya Consulting Hub`,
            });

            if (res2.error) {
                return { message: `Booking request sent to client, but confirmation email failed for ${name}.` };
            }

            return { message: `Booking request sent successfully for ${name}.` };
        } catch (error) {
            console.error(error);
            return { message: `Booking request failed for ${name} due to an unexpected error.` };
        }
    },
});
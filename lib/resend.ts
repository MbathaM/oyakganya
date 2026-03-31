import { env } from '@/env';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  text,
  react,
}: {
  to: string;
  subject: string;
  text: string;
  react?: React.ReactElement;
}) {
  const { data, error } = await resend.emails.send({
    from: 'Mbatha Melusi <noreply@mbathamelusi.co.za>',
    to: [to],
    subject,
    text,
    react,
  });

  return { data, error };
};
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: 'Rajat <fromEmail>',
      to: email,
      subject: "This is Rajat Kumar!",
      react: (
        <>
            <h1>{subject}</h1>
            <p>Thank You for connecting with me!</p>
            <p>I will get back with you as soon as I can !</p>
            
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

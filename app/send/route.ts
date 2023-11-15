import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend("re_eZPcYNPg_45Jof4cPWiD7TtRAcemc1iid");

export async function POST(req: NextRequest) {
  const { name, tel } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "paf-gr8.johnvva2ri0r@yandex.by",
      subject: "Данные из формы",
      html: `
      <ul>
      <li>
        <strong>Имя: </strong><span>${name}</span>
      </li>
      <li>
        <strong>Номер телефона: </strong><span>${tel}</span>
      <li/>
      </ul>
      `,
    });

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error });
  }
}
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();
    const email = req.email;
    const statut = req.statut;

    const res = await fetch('https://api.sendinblue.com/v3/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.BREVO_SECRET ?? '',
        },
        body: JSON.stringify({
            email,
            attributes: {
                statut,
            },
            listIds: [2],
            updateEnabled: true,
            emailBlacklisted: false,
        }),
    });

    const data = await res.json();

    return NextResponse.json(data);
}

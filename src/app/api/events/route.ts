import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const events = await prisma.event.findMany();
        return Response.json(events, {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error: any) {
        return new Response('Internal Server Error', {
            status: 500
        })
    }
}

export const revalidate = 120  // revalidating every 120 seconds


export async function POST(request: Request) {
    const body = await request.json();

    try {
        const newEvent = await prisma.event.create({
            data: body
        })
        return Response.json({data: newEvent}, {
            status: 201
        })
    } catch (error) {
        return new Response('Internal Server Error', {
            status: 500
        })
    }
}
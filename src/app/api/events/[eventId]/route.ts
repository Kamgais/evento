import prisma from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, {params}: {params: {eventId: string}}) {
    try {
        const eventFromDB = await prisma.event.findUnique({
            where: {
                id: parseInt(params.eventId)
            }
        })
        return Response.json({data: eventFromDB}, {
            status: 200,
        })
    } catch (error: any) {
        return new Response('Internal Server Error', {
            status: 500
        })
    }
}


export async function PUT(request: Request, {params}: {params: {eventId: string}}) {
    const body = await request.json();
    try {
        const eventFromDB = await prisma.event.findUnique({
            where: {
                id: parseInt(params.eventId)
            }
        })
        if(!eventFromDB) return new Response('Resource not found', {status: 404});
        const updatedEvent = await prisma.event.update({
            where: {
                id: parseInt(params.eventId)
            },
            data: body
        })
        return Response.json({data: updatedEvent}, {
            status: 200
        })
    } catch (error) {
        return new Response('Internal server error', {
            status: 500
        })
    }
}


export async function DELETE(_request: Request, {params}: {params: {eventId: string}}) {
    try {
        const toDelete = await prisma.event.delete({
            where: {
                id: Number(params.eventId)
            }
        })
        return Response.json({message: 'Resource deleted successfully'}, {
            status: 200
        })
    } catch (error) {
        return new Response('Internal Server Error', {
            status: 500
        })
    }
}
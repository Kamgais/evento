import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export async function POST(request: NextRequest) {
    const body = await request.json();
    const {username, password} = body;
    if(!username || !password) {
        return new NextResponse("Missing username oder password", {
            status: 400
        })
    }

    try {
        const isPresent = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if(isPresent) return new NextResponse("User already exists", {status: 400})
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })
        return NextResponse.json(newUser);
    } catch (error) {
        return new NextResponse("Internal Server Error", {status: 500})
    }

}
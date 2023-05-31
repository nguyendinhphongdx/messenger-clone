import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;
        if (!email || !password || !name) {
            return new NextResponse('Missing info', { status: 400 });
        }

        const hashPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email, name, hashPassword
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
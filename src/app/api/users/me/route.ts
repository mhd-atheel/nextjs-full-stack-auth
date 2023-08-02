import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse ,NextRequest } from "next/server";
import User from "@/app/models/userModel";
import jwt from "jsonwebtoken";
connect();


export async function GET(request:NextRequest){
    try {
        const token =  await request.cookies.get("token")?.value || '';
        const decodedToken:any = await jwt.verify(token, process.env.TOKEN_SECRET!);
        
        const user  = await User.findOne({_id:decodedToken.id}).select("-password")

        return NextResponse.json({user})

    } catch (error: any) {
        throw new Error(error.message);
    }
}


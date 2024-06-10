import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let user = await users.find({});
    // console.log(user);

    return NextResponse.json(user);
}

export async function POST(req){


    const body = await req.json();
    // console.log(body);

    let already = await users.find({email: body.email});

    if(already.length>=1)
    {
        return NextResponse.json({
            message: "user exist",
            role: already[0].role
        })
    }
    else
    {
        let newuser = new users({
            _id: new mongoose.Types.ObjectId(),
            name: body.name,
            email: body.email,
            role: body.role
        })

        // await newuser.save();
        await users.create(newuser);

        return NextResponse.json({
            message: 'User saved',
            role: ""
        });
    }
}

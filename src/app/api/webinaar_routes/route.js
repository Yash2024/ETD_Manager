import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Webinaar from "../../../../comp/models/webinaar";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await Webinaar.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new Webinaar({
        _id: new mongoose.Types.ObjectId(),
        Title: body.Title,
        Date: body.Date,
        Topic: body.Topic,
        Faculty: body.Faculty,
        Designation: body.Designation
    })
    // await newuser.save();
    await Webinaar.create(newann);
    return NextResponse.json({
        message: 'Webinaar saved'
    });
    
}


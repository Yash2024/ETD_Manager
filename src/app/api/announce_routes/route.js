import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Announcement from "../../../../comp/models/announcement";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await Announcement.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new Announcement({
        _id: new mongoose.Types.ObjectId(),
        Title: body.Title,
        Faculty: body.Faculty,
        Date: body.Date,
        Content: body.Content
    })
    // await newuser.save();
    await Announcement.create(newann);
    return NextResponse.json({
        message: 'Announcement saved'
    });
    
}


import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Publication from "../../../../comp/models/publication";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await Publication.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new Publication({
        _id: new mongoose.Types.ObjectId(),
        Title: body.Title,
        Conference: body.Conference,
        Book_Chapter: body.Book_Chapter,
        Patent: body.Patent,
        Filing_Date:body.Filing_Date,
        Faculty:body.Faculty
    })
    // await newuser.save();
    await Publication.create(newann);
    return NextResponse.json({
        message: 'Publication saved'
    });
    
}


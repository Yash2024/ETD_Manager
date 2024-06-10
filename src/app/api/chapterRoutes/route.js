import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import BookChapter from "../../../../comp/models/book_chapter";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await BookChapter.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new BookChapter({
        _id: new mongoose.Types.ObjectId(),
        Title: body.Title,
        Book_Title: body.Book_Title,
        Editor: body.Editor,
        Publisher: body.Publisher,
        ISBNNo: body.ISBNNo,
        No_Authors:body.No_Authors,
        Publication_Date:body.Publication_Date
    })
    // await newuser.save();
    await BookChapter.create(newann);
    return NextResponse.json({
        message: 'Book Chapeter saved'
    });
    
}


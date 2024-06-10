import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Internship from "../../../../comp/models/internship";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await Internship.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new Internship({
        _id: new mongoose.Types.ObjectId(),
        Std_Name: body.Std_Name,
        Std_Rollno: body.Std_Rollno,
        Semester:body.Semester,
        INDs:body.INDs,
        IND_Add: body.IND_Add,
        Title: body.Title,
        Duration: body.Duration,
        
    })
    // await newuser.save();
    await Internship.create(newann);
    return NextResponse.json({
        message: 'Internship saved'
    });
    
}


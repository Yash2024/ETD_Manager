import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Resproconf from "../../../../comp/models/research_proj_conf";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await Resproconf.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new Resproconf({
        _id: new mongoose.Types.ObjectId(),
        Title: body.Title,
        St_Date: body.St_Date,
        Duration: body.Duration,
        Amount: body.Amount,
        Sanc_agency:body.Sanc_agency,
        Faculty:body.Faculty
    })
    // await newuser.save();
    await Resproconf.create(newann);
    return NextResponse.json({
        message: 'Research saved'
    });
    
}


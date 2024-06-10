import { NextResponse } from "next/server";
import Student from "../../../../../comp/models/student";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    const email=req.url.split('/')[5];
    // console.log(email);
    let std = await Student.find({email:email});
    // console.log(user);

    return NextResponse.json(std);
}
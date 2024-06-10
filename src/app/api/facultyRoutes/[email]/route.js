import { NextResponse } from "next/server";
import Faculty from "../../../../../comp/models/fac_info";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    const email=req.url.split('/')[5];
    // console.log(email);
    let fac = await Faculty.find({email:email});
    // console.log(user);

    return NextResponse.json(fac);
}
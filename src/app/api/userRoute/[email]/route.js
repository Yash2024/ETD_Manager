import { NextResponse } from "next/server";
import users from "../../../../../comp/models/user";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    const email=req.url.split('/')[5];
    // console.log(email);
    let user = await users.find({email:email});
    // console.log(user);

    return NextResponse.json(user);
}
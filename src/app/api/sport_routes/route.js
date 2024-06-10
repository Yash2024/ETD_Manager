import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Sport from "../../../../comp/models/sports";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let anns = await Sport.find();

    return NextResponse.json(anns);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newann = new Sport({
        _id: new mongoose.Types.ObjectId(),
        Game_name: body.Game_name,
        Player_name: body.Player_name,
        Team_name: body.Team_name,
        Loca: body.Loca,
        Position: body.Position,
        Certificate_id: body.Certificate_id
    })
    // await newuser.save();
    await Sport.create(newann);
    return NextResponse.json({
        message: 'Sport saved'
    });
    
}


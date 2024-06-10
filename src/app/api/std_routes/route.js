import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Student from "../../../../comp/models/student";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let stds = await Student.find();

    return NextResponse.json(stds);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newstd = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: body.name,
        email: body.email,
        Year: body.Year,
        Department: body.Department,
        Mob: body.Mob,
        Address: body.Address,
        Guardian: body.Guardian,
    })
    // await newuser.save();
    await Student.create(newstd);
    return NextResponse.json({
        message: 'Data saved'
    });
    
}

export async function PATCH(req){
    const body = await req.json();

    let doc = await Student.find({email: body.email});
    // doc=doc.data;
    // console.log(doc);
            if(doc.length>=1)
            {
                await Student.updateOne(
                    {email: body.email},
                    {
                        
                        $set:{
                                name: body.name,
                                email: body.email,
                                Year: body.Year,
                                Department: body.Department,
                                Mob: body.Mob,
                                Address: body.Address,
                                Guardian: body.Guardian,
                        }
                    })
                    
                        return NextResponse.json({
                            message: 'Data updated successfully'
                       
                        })
            }
        
        return NextResponse.json({
            message: "Student doesn't exists"
        });
}
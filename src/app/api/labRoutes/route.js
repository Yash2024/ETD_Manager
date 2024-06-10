import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Laboratory from "../../../../comp/models/laboratory";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let labs = await Laboratory.find();

    return NextResponse.json(labs);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newlab = new Laboratory({
        _id: new mongoose.Types.ObjectId(),
        Name_of_the_Laboratory: body.Name_of_the_Laboratory,
        No_of_students_per_setup: body.No_of_students_per_setup,
        Name_of_the_important_equipment: body.Name_of_the_important_equipment,
        Weekly_utilization_status: body.Weekly_utilization_status,
        Name_of_technical_staff: body.Name_of_technical_staff,
        Designation: body.Designation, 
        Qualification: body.Qualification,
        Additional_facilities: body.Additional_facilities,
        Safety_measures: body.Safety_measures,
    })
    // await newuser.save();
    await Laboratory.create(newlab);
    return NextResponse.json({
        message: 'Lab saved'
    });
    
}

// export async function PATCH(req){
//         const body= await req.json();
// }
import { NextResponse } from "next/server";
import users from "../../../../comp/models/user";
import Faculty from "../../../../comp/models/fac_info";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function GET(req){
    let facs = await Faculty.find();

    return NextResponse.json(facs);
}

export async function POST(req){

    const body = await req.json();
    // console.log(body);

    let newfac = new Faculty({
        _id: new mongoose.Types.ObjectId(),
        Name: body.Name,
        email: body.email,
        Highest_degree: body.Highest_degree,
        University: body.University,
        Year_of_attaining_higher_qualification: body.Year_of_attaining_higher_qualification,
        Association_with_the_Institution: body.Association_with_the_Institution,
        Designation: body.Designation, 
        Date_on_which_Designated : body.Date_on_which_Designated,
        Date_of_Joining_the_Institution: body.Date_of_Joining_the_Institution,
        Department: body.Department,
        Specialization: body.Specialization,
        Research_Paper_Publications: body.Research_Paper_Publications,
        PhD_Guidance: body.PhD_Guidance,
        Faculty_Receiving_PhD_during_the_Assessment_Years: body.Faculty_Receiving_PhD_during_the_Assessment_Years,
        Date_of_Leaving: body.Date_of_Leaving,
        Nature_of_Association: body.Nature_of_Association,
    })
    // await newuser.save();
    await Faculty.create(newfac);
    return NextResponse.json({
        message: 'Data saved'
    });
    
}

export async function PATCH(req){
    const body = await req.json();

    let doc = await Faculty.find({email: body.email});
    // doc=doc.data;
    // console.log(doc);
            if(doc.length>=1)
            {
                await Faculty.updateOne(
                    {email: body.email},
                    {
                        
                        $set:{
                            Name: body.Name,
                            email: body.email,
                            Highest_degree: body.Highest_degree,
                            University: body.University,
                            Year_of_attaining_higher_qualification: body.Year_of_attaining_higher_qualification,
                            Association_with_the_Institution: body.Association_with_the_Institution,
                            Designation: body.Designation, 
                            Date_on_which_Designated : body.Date_on_which_Designated,
                            Date_of_Joining_the_Institution: body.Date_of_Joining_the_Institution,
                            Department: body.Department,
                            Specialization: body.Specialization,
                            Research_Paper_Publications: body.Research_Paper_Publications,
                            PhD_Guidance: body.PhD_Guidance,
                            Faculty_Receiving_PhD_during_the_Assessment_Years: body.Faculty_Receiving_PhD_during_the_Assessment_Years,
                            Date_of_Leaving: body.Date_of_Leaving,
                            Nature_of_Association: body.Nature_of_Association,
                        }
                    })
                    
                        return NextResponse.json({
                            message: 'Data updated successfully'
                       
                        })
            }
        
        return NextResponse.json({
            message: "Faculty doesn't exists"
        });
}
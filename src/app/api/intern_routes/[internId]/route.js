import { NextResponse } from "next/server";
import users from "../../../../../comp/models/user";
import Internship from "../../../../../comp/models/internship";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function DELETE(req) {

    const internId=req.url.split('/')[5];
    console.log(internId);
  
    if (!internId) {
      return NextResponse.json({
        message: 'Internship ID is required for deletion',
      });
    }
      const deletedIntern = await Internship.findByIdAndDelete(internId);
  
      if (deletedIntern) {
        return NextResponse.json({
          message: 'Internship deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Internship not found',
        });
      }
    
    
  }
import { NextResponse } from "next/server";
import users from "../../../../../comp/models/user";
import Webinaar from "../../../../../comp/models/webinaar";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function DELETE(req) {

    const webinaarId=req.url.split('/')[5];
    console.log(webinaarId);
  
    if (!webinaarId) {
      return NextResponse.json({
        message: 'Webinaar ID is required for deletion',
      });
    }
      const deletedWebinaar = await Webinaar.findByIdAndDelete(webinaarId);
  
      if (deletedWebinaar) {
        return NextResponse.json({
          message: 'Webinaar deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Webinaar not found',
        });
      }
    
    
  }
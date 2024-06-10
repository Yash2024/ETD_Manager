import { NextResponse } from "next/server";
import users from "../../../../../comp/models/user";
import Resproconf from "../../../../../comp/models/research_proj_conf";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function DELETE(req) {

    const researchId=req.url.split('/')[5];
    console.log(researchId);
  
    if (!researchId) {
      return NextResponse.json({
        message: 'Research ID is required for deletion',
      });
    }
      const deletedResearch = await Resproconf.findByIdAndDelete(researchId);
  
      if (deletedResearch) {
        return NextResponse.json({
          message: 'Reesearch deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Reesearch not found',
        });
      }
    
    
  }
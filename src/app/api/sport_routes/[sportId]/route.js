'use client';
import { NextResponse } from "next/server";
import Sport from "../../../../../comp/models/sports";
import dbConnect from "@/app/utils/dbConnect";
dbConnect();

export async function DELETE(req) {

    const sportId=req.url.split('/')[5];
    console.log(sportId);
  
    if (!sportId) {
      return NextResponse.json({
        message: 'Sport ID is required for deletion',
      });
    }
      const deletedsport = await Sport.findByIdAndDelete(sportId);
  
      if (deletedsport) {
        return NextResponse.json({
          message: 'Sport deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Sport not found',
        });
      }
    
    
  }
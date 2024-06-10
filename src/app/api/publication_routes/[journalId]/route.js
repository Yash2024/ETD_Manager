import { NextResponse } from "next/server";
import Publication from "../../../../../comp/models/publication";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function DELETE(req) {

    const journalId=req.url.split('/')[5];
    console.log(journalId);
  
    if (!journalId) {
      return NextResponse.json({
        message: 'Journal ID is required for deletion',
      });
    }
      const deletedJournal = await Publication.findByIdAndDelete(journalId);
  
      if (deletedJournal) {
        return NextResponse.json({
          message: 'Journal deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Journal not found',
        });
      }
    
    
  }
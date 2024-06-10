import { NextResponse } from "next/server";
import users from "../../../../../comp/models/user";
import Announcement from "../../../../../comp/models/announcement";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export async function DELETE(req) {
    // Extract announcement ID from the request parameters or body
    const announcementId=req.url.split('/')[5];
    console.log(announcementId);
  
    // Validate if the announcementId is provided
    if (!announcementId) {
      return NextResponse.json({
        message: 'Announcement ID is required for deletion',
      });
    }
      const deletedAnnouncement = await Announcement.findByIdAndDelete(announcementId);
  
      if (deletedAnnouncement) {
        return NextResponse.json({
          message: 'Announcement deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Announcement not found',
        });
      }
    
    
  }
import { NextResponse } from "next/server";
import BookChapter from "../../../../../comp/models/book_chapter";
import dbConnect from "@/app/utils/dbConnect";
dbConnect();

export async function DELETE(req) {

    const chapterId=req.url.split('/')[5];
    console.log(chapterId);
  
    if (!chapterId) {
      return NextResponse.json({
        message: 'Chapter ID is required for deletion',
      });
    }
      const deletedchapter = await BookChapter.findByIdAndDelete(chapterId);
  
      if (deletedchapter) {
        return NextResponse.json({
          message: 'Chapter deleted successfully',
        });
      } else {
        return NextResponse.json({
          message: 'Chapter not found',
        });
      }
    
    
  }
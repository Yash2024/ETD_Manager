import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Title: { type: String},
        Book_Title: { type: String },
        Editor: { type: String },
        Publisher: { type: String },
        ISBNNo: { type: String },
        No_Authors: { type: String },
        Publication_Date: { type: Date }, 
        
    })

const BookChapter = mongoose.models.BookChapter || mongoose.model('BookChapter', chapterSchema)

export default  BookChapter;
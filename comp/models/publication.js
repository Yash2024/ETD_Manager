import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Title: { type: String},
        Conference: { type: String },
        Book_Chapter: { type: String },
        Patent: { type: String },
        Filing_Date: { type: Date }, 
        Faculty: { type: String }
    })

const Publication = mongoose.models.Publication || mongoose.model('Publication', publicationSchema)

export default  Publication;
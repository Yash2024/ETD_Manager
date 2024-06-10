import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Title: { type: String},
        Faculty: { type: String },
        Date: { type: Date },
        Content: { type: String },
    })

const Announcement = mongoose.models.Announcement || mongoose.model('Announcement', announcementSchema)

export default  Announcement;
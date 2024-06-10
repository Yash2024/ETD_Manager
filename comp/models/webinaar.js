import mongoose from "mongoose";

const webinarSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Title: { type: String},
        Date: { type: Date },
        Topic: { type: String },
        Faculty: { type: String },
        Designation: { type: String }, 
    })

const Webinaar = mongoose.models.Webinaar || mongoose.model('Webinaar', webinarSchema)

export default  Webinaar;
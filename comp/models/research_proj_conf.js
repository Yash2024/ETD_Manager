import mongoose from "mongoose";

const resproconfSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Title: { type: String},
        St_Date: { type: Date },
        Duration: { type: String },
        Amount: { type: String },
        Sanc_agency: { type: String }, 
        Faculty: { type: String }
    })

const Resproconf = mongoose.models.Resproconf || mongoose.model('Resproconf', resproconfSchema)

export default  Resproconf;
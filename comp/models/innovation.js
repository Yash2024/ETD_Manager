import mongoose from "mongoose";

const innovationSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Title: { type: String},
        Faculty: { type: String },
        Description: { type: String },
        Criteria: { type: String }
    })

const Innovation = mongoose.models.Innovation || mongoose.model('Innovation', innovationSchema)

export default  Innovation;
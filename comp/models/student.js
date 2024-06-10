import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        name: { type: String},
        email: {type: String},
        Year: { type: String },
        Department: { type: String },
        Mob: { type: String },
        Address: { type: String},
        Guardian: { type: String},
    })

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema)

export default  Student;
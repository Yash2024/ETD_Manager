import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Std_Name: { type: String},
        Std_Rollno: { type: String},
        Semester: { type: String},
        INDs: { type: String},
        IND_Add: { type: String},
        Title: { type: String},
        Duration: { type: String },
    })

const Internship = mongoose.models.Internship || mongoose.model('Internship', internshipSchema)

export default  Internship;
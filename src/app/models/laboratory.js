import mongoose from "mongoose";

const labSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Name_of_the_Laboratory: { type: String},
        No_of_students_per_setup: { type: String },
        Name_of_the_important_equipment: { type: String },
        Weekly_utilization_status: { type: String },
        Name_of_technical_staff: { type: String },
        Designation: { type: String }, 
        Qualification: { type: String },
        Additional_facilities: { type: String },
        Safety_measures: { type: String },
    },
    {
        timestamp: true,
    })

const Laboratory = mongoose.models.Laboratory || mongoose.model('Laboratory', labSchema)

export default  Laboratory;
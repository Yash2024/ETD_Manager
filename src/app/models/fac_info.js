import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Name: { type: String},
        email: {type: String},
        Highest_degree: { type: String },
        University: { type: String },
        Year_of_attaining_higher_qualification: { type: String },
        Association_with_the_Institution: { type: String },
        Designation: { type: String }, 
        Date_on_which_Designated : { type: String },
        Date_of_Joining_the_Institution: { type: String },
        Department: { type: String },
        Specialization: {type: String},
        Research_Paper_Publications: {type: String},
        PhD_Guidance: {type: String},
        Faculty_Receiving_PhD_during_the_Assessment_Years: {type: String},
        Date_of_Leaving: {type: String},
        Nature_of_Association: {type: String},
    })

const Faculty = mongoose.models.Faculty || mongoose.model('Faculty', facultySchema)

export default  Faculty;
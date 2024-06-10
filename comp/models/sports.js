import mongoose from "mongoose";

const sportSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        Game_name: { type: String},
        Player_name: { type: String},
        Team_name: { type: String},
        Loca: { type: String},
        Position: { type: String},
        Certificate_id: { type: String}
    })

const Sport = mongoose.models.Sport || mongoose.model('Sport', sportSchema)

export default  Sport;
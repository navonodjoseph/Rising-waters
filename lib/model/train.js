import mongoose from "../db/connection.js";
const Schema = mongoose.Schema

const Train = new Schema({
    cause: String,  
    created_at: String, 
    effect: String, 
    header: String,
    severity: Number,
    timeframe: String,
    updated_at: String,  
})

export default mongoose.model("Train", Train); 
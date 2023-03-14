import mongoose from "../db/connection.js";
const Schema = mongoose.Schema

const Train = new Schema({
    service_date: Number, 
    total_monthly_ridership: Number, 
})

export default mongoose.model("Train", Train); 
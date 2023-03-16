import mongoose from "mongoose"
const Character = new mongoose.Schema({
    name: String, 
    height: String, 
    url: String
})

export default mongoose.model("Character", Character)
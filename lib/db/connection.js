import mongoose from "mongoose"

mongoose.connect('mongodb://127.0.0.1:27017/risingWater', { useNewUrlParser: true, useUnifiedTopology: true} )

export default mongoose
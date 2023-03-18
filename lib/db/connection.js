import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/risingWater', { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose
import express from "express" 
import trainRouter from "./routes/index.js"
import mongoose from "./db/connection.js"
const app = express (); 
const port = 3000 

const db = mongoose.connection 

db.on("error", (error) => console.error(error))
db.once("open", ()=> console.log("connected to database"))

app.use(express.json())
app.use("/", trainRouter)
// set up routes



app.get("/", (req,res) => {
    res.send("Hello friends")
})

app.listen(port, ( ) => {
    console.log("listening on port 3000")
})
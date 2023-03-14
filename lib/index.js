import express from "express" 
// import trainRouter from "./routes/index.js"
// import mongoose from "./db/connection.js"
import axios from "axios"; 
import facts from "./routes/catRoute"


const app = express (); 

app.use("/cat", facts)

app.get("/", (req,res) => {
    res.send("Hello friends")
})

app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})
import express from "express" 
import trainRouter from "./routes/index.js"
import mongoose from "./db/connection.js"
import axios from "axios"; 


const app = express (); 


const url = "https://api-v3.mbta.com/predictions/?filter\\[route\\]=CR-Worcester&filter\\[stop\\]=place-sstat&stop_sequence=1"

const config = {
    headers: {
        "Accept": "text/event-stream", 
    }
}
axios.defaults.headers.common = {
    "X-API-Key": "92412f9a2666460aa165374119e7e1dc"
}

const getData = await axios({
    method:"post",
    url: url,
    data:{
        message: "testing axios connection", 
    }, 
    config,
}); 
    

app.use(express.json())
// app.use("/", trainRouter)
// set up routes

//fs.readFile('/')

app.get("/", (req,res) => {
    res.send("Hello friends")
})

app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})
import express from "express" 
import axios from "axios"; 
import characters from "./routers/characterRouter.js"

//middleware 
const app = express(); 

const url = "https://swapi.dev/api/people"

app.get("/", (req,res) => {
    res.send("---Hello world---")
})

app.use("/characters", characters)

app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})

axios.get(url)
.then((result) =>{
    console.log(result.data); 
}).catch((err) => {
    console.log(err)
})


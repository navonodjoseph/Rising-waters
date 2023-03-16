import express from "express" 
const app = express();
import axios from "axios"; 
import characters from "./routers/characterRouter.js"

const url = "https://swapi.dev/api/people"

//middleware 
app.use(express.json());

//axios request 
axios.get(url)
.then((result) =>{
    console.log(result.data); 
}).catch((err) => {
    console.log(err)
})

//routes
app.get("/", async (req,res) => {
    res.send("---Hello world---")
})

app.use("/characters", characters)

app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})



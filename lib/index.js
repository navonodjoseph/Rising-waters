import express, { response } from "express" 
const app = express();
import axios from "axios"; 
import characters from "./routers/characterRouter.js"
import Character from "./model/swapi.js"
import fs, { readFile, writeFile }  from "fs" 


const url = "https://swapi.dev/api/people"

//middleware 
app.use(express.json());

//axios request 
axios.get(url)
.then((result) =>{
    // console.log(result.data); 
      let resultData = result.data.results
      console.log(result.data.results.length)
    for (let i = 0; i < resultData.length; i++){
        console.log(resultData[i])
    Character.create({
        name: resultData[i].name, 
        height: resultData[i].height, 
        url: resultData[i].url
        })
    }
}).catch((err) => {
    console.log(err)
})


// const data = result.data; 


// app.get('/', (req, res)=>{
//     axios.get(url)
//     .then(response => {
//         const data = response.data
//     fs.writeFile('./db/swapiData.json', JSON.stringify(data), (err) => {
//         if(err) throw err
//         console.log('Data written to file')

//     })
//     res.send('Data converted to JSON file')
//     }) 
// .catch(error =>{
//     console.log(error);
//     res.status(500).send("Error fetching data")
//     })
// })


//routes
const swappiData = app.get("/", async (req,res) => {
    res.send("---Hello world---")
})
// fs.readFile('./db/test.txt', (err, data)=> {
//     if(err) throw err; 
//     console.log(data.toString());
// })


// const dataSet = JSON.stringify(swappiData.data); 

// fs.writeFile('./db/swapi2.json', dataSet, err =>{
//     if(err)
//     console.log(err);
//     else{
//         console.log("File has been writtten successfully")
//     }
// }) 


app.use("/char", characters)



app.listen(3000, ( ) => {
    console.log("listening on port 3000")
})



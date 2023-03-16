import Character from "../model/swapi.js"
import axios from "axios";
import mongoose from "./connection.js";

let resultData; 
let saveCounter = 0; 

const url = "https://swapi.dev/api/people"

url.map(async url =>{
    try{
        const response = await axios(url)
        const json = await response.json();
        resultData = [...json]; 

        for(let i = 0; i < resultData.length; i++){
            let Character = new Characters({
               name: resultData[i].name,
               height: resultData[i].height, 
                url: resultData[i].url
            })
            Character.save(() =>{
                console.log("saved" + Character)
                saveCounter++;
                if(saveCounter === resultData.length){
                    mongoose.disconnect()
                    .then(() => console.log("saved successfully and mongodb disconnnected"))
                    .catch(error => console.log(error)); 
                }
            })
        }
    }catch (error){
        console.log(error); 
    }
})
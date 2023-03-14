import express from "express"
import axios from "axios"

const getFacts = async() => {
    let response = await axios ('https://catfact.ninja/fact')
    return response
}

const facts = async (req, res) => {
    let responseFact = await getFacts(); 
    res.send(responseFact.data.fact)
}; 

export default facts 
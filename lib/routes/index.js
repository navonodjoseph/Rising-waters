import express from "express" 
///import trainRouter from "./train.js"

const router = express.Router(); 

router.get("/", (res, send) => {
    res.send("connected to local host")
})

export default router; 
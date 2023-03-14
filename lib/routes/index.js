import express from "express" 
import trainRouter from "./train.js"

const router = express.Router(); 

router.use("./train", trainRouter)

router.get("/", (res, send) => {
    res.send("connected to local host")
})

export default router; 
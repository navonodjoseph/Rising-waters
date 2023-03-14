import express from "express"
import trainRouter from "../routers/train"

const router = express.Router(); 

const Train = router; 

router.get("/", trainRouter)

export default Train; 
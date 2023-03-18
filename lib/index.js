import express, { response } from "express"
const app = express();
import weather from "./routers/weatherRouter.js"
import train from "./routers/train.js";

//middleware 
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("---hello world---")
})

app.use("/weather", weather)
app.use("/trains", train)

app.listen(3000, () => {
    console.log("listening on port 3000")
})



import Train from "../model/train.js"

const trainRouter ={
    index: (req, res) => {
        Train.find({})
        .then(train => {
            res.json(train)
        })
    }
}

export default trainRouter
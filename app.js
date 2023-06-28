const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const Port = 5000

let data = []

app.get("/", (req, res) => {
    res.send("Server started")
})

app.post('/', (req, res) => {
    console.log(`API call to server`)
    const formData = req.body
    const email = req.body.email
    for(const oldEmail of data) {
        if(oldEmail.email === email){
            res.send(`Email already in use`)
            return;
        }    
    }
    if(formData.email && formData.password){
        data.push(formData)
        console.log(formData)
        res.send(`Form Data Saved`)
    }
})

app.listen(Port, () => {
    console.log(`Server Started on Port ${Port}`)
})
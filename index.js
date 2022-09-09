

const express = require ('express')
const app = express()

app.get('/miarchivo', (req, res) => {
    res.sendFile('./heart.png', {
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({
        "name": "John",
        "last name": "wright"
    
    })
})


app.listen(3000)
console.log(`server on port ${3000}`)
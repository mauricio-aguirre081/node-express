

const express = require ('express')
const app = express()

app.get('/hello/:username', (req, res) => {
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:a/:b', (req, res) => {
    const total = parseInt(req.params.a) + parseInt(req.params.b);
    res.send(`The Result is: ${total}`)
})

app.get('/users/:username/photo', (req, res) => {
    if(req.params.username === "Julio") {
        return res.sendFile('./heart.png', {
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso')
})

app.get('/name/:nombre/age/:edad', (req, res) => {
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.edad}`)
})




app.listen(3000)
console.log(`server on port ${3000}`)
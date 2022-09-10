

const express = require ('express')
const app = express()

app.use((req, res, next) => {
    if(req.query.login === 'mingo@fantasma.com'){
        next();
    } else {
        res.send('No autorizado')
    }
})


app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`)
    next()
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})



app.listen(3000)
console.log(`server on port ${3000}`)
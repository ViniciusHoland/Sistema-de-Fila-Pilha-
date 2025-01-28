const express = require('express')
const cors = require('cors')
const exp = require('constants')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())


let registros = [
    {
        nome: 'Vinicius',
        hora: "08:40:32"
    },
]


app.get('/registros', (req,res) => {
    res.json(registros)
})


app.listen(PORT, () => {
    console.log('server running port ', PORT)
})
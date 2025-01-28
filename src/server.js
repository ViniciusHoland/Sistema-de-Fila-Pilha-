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

app.post('/registros', (req,res)=>{

    const {nome} = req.body

    if(nome){
        const date = new Date()
        const horaAtual = date.toLocaleTimeString('pt-br',{
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        registros.push({nome,horaAtual})
        return res.status(201).json({ message: 'Registro adicionado!' });
    }

    res.status(400).json({ message: 'Dados inválidos!' });


})


app.listen(PORT, () => {
    console.log('server running port ', PORT)
})
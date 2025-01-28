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
        horario: "08:40:32"
    },
]


app.get('/registros', (req,res) => {
    res.json(registros)
})

app.post('/registros', (req,res)=>{

    const {nome, horario} = req.body

    if(nome){
        registros.push({nome,horario})
        return res.status(201).json({ message: 'Registro adicionado!' });
    }

    res.status(400).json({ message: 'Dados inválidos!' });


})

app.delete('/registros', (req, res) => {
    registros = [];
    res.json({ message: 'Registros apagados!' });
  })


app.listen(PORT, () => {
    console.log('server running port ', PORT)
})
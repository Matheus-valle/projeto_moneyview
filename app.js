const express = require('express')

const path = require('path')
const app = express()
const port = 3333


app.use(express.static(path.join(__dirname, 'PUBLIC')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PUBLIC', 'index.html'))
})

app.listen(port, function() {
    console.log(`Servidor Rodando na porta ${port}`)
})

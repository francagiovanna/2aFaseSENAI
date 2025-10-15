const express = require('express')
const app = express()
const port = 3000

const connection = mysql.createConnection({
    host:"127.0.0.1",
    post:"3306",
    database:"crud_sala",
    user:"root",
    password:"senai"
})

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

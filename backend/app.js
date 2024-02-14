const express = require('express')
const cors = require('cors');
const app = express()
const port = 1337

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! With cors now!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
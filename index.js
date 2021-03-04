const express = require('express')
const app = express()
const port = 80;

app.get('/', (req, res) => {
  res.send(process.env.MESSAGE || 'HELLO WORLD');
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})
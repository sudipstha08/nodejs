const express = require('express')
const app =express()

// Setting Routes
app.get('/', (req, res) => {
  console.log('Here')
  // res.sendStatus(500)
  // res.send('Hi')
  // res.status(500).send("Oops server failed")
  res.status(500).json({ message: "Errors"})
})

app.listen(3000)
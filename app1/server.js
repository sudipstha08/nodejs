const express = require('express')
const app =express()

app.set('view engine', 'ejs')

// Setting Routes
app.get('/', (req, res) => {
  console.log('Here')
  // res.sendStatus(500)
  // res.send('Hi')
  // res.status(500).send("Oops server failed")
  // res.status(500).json({ message: "Errors"})

  // Download file
  // res.download("server.js")

  // Render file
  res.render('index')
})

app.listen(3000)
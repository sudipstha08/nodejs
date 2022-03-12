const express = require('express')
const app =express()

app.set('view engine', 'ejs')
app.use(logger)
// Setting Routes
app.get('/', logger, (req, res) => {
  console.log('Here')
  // res.sendStatus(500)
  // res.send('Hi')
  // res.status(500).send("Oops server failed")
  // res.status(500).json({ message: "Errors"})

  // Download file
  // res.download("server.js")

  // Render file
  res.render('index', {texts: 'World'})
})

const userRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postsRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000)
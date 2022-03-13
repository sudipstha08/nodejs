const express = require('express')
const app =express()

app.set('view engine', 'ejs')
app.use(express.static("Public"))

// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({ extended: true }))
app.use(logger)

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json())
// Setting Routes
// app.get('/', logger, (req, res) => {
//   console.log('Here')
//   // res.sendStatus(500)
//   // res.send('Hi')
//   // res.status(500).send("Oops server failed")
//   // res.status(500).json({ message: "Errors"})

//   // Download file
//   // res.download("server.js")

//   // Render file
//   res.render('index', {texts: 'World'})
// })

const userRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postsRouter)


// logger
function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000)
const express = require('express')
const router = express.Router()
router.use(postLogger)

router.get('/', (req, res) =>{
  // Access query params
  const name = req.query.name
  console.log("NAME ::", name)
  res.send('All posts')
})

router.get('/1', (req, res) => {
  res.send('One Post')
})


function postLogger(req, res, next) {
  console.log("Posts logger ::", req.originalUrl)
  next()
}

module.exports = router
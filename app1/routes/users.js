const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
  res.send('Users list')
})

// router.get('/new', (req, res) => {
//   res.send('Users new Form')
// })

router.post('/', (req,res) => {
  const isValid = false
  if(isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error")
    res.render('users/new', { firstName: req.body.firstName })
  }
  // console.log("formData", req.body.firstName)
  // res.send('Created user')
})

// router.get('/:id', (req, res) => {
//   // req.params.id
//   res.send(`User fetched with ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//   // req.params.id
//   res.send(`Edit fetched with ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//   // req.params.id
//   res.send(`Delete fetched with ${req.params.id}`)
// })

 router.get("/new", (req, res) => {
    res.render("users/new", { firstName: "Test" })
  })

// Grouping routes
router
  .route("/:id")
  .get((req, res) => {
    console.log("user", req.user)
    res.send(`Get user with ${req.params.id}`)
  })
  .put((req, res) => {
  // req.params.id
  res.send(`Edit fetched with ${req.params.id}`)
  })
  .delete((req, res) => {
  // req.params.id
  res.send(`Delete fetched with ${req.params.id}`)
  })

 

  const users = [{ name: "Sudip"}, { name: "Jack"}, { name: 'Micheal' } ]
  // Runs when it finds the specified params. It is a type of middleware
  router.param("id", (req, res, next, id) => {
    console.log("id", id)
    req.user = users[id]
    next()
  })

module.exports = router

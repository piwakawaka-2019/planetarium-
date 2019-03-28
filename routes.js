const express = require('express')
const router = express.Router()
const fs =require ('fs')

router.get('/', (req, res) => {
  // res.send('planets!!!!')
  res.redirect('/home')
})

//getting to home page 

router.get('/home', (req,res) => {


  fs.readFile('planetinfo.json', 'utf8', (err, data) => {

    let planetinfo = JSON.parse(data)

  res.render('/planets/index', planetData)
  })
})





module.exports = router


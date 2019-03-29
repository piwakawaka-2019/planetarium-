const express = require('express')
const router = express.Router()
const fs =require ('fs')

const planetinfo = require('./data/planetinfo.json')
const randomfacts = require('./data/randomfacts.json')

// router.get('/', (req, res) => {
//   res.send('planets!!!!')
  
// })


router.get('/', (req, res)=>{

  res.render("./planets/index.hbs", planetinfo)
})




// router.get('/', (req, res)=>{
 
//     res.render("./planets/index.hbs", randomfacts)

// })





module.exports = router


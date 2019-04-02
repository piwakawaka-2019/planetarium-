const express = require('express')
const router = express.Router()
const fs = require('fs')

// router.get('/', (req, res) => {
//   res.send('planets!!!!')

// })

//getting to home page 

router.get('/', (req, res) => {


  fs.readFile('./data/planetinfo.json', 'utf8', (err, data) => {
    if (err) console.log(err)

    let planetDetails = JSON.parse(data)

    console.log(planetDetails)
    res.render('planets/index', planetDetails)
  })
})

//
router.get('/planets/:id', (req, res) => {

  let Id = req.params.planet

  fs.readFile('./data/planetinfo.json', 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
    let planetDetails = JSON.parse(data)
    console.log(planetDetails)

    let single = planetDetails.planets.find((item) => item.planet == Id)
    console.log(single)
    res.render('planets/planetprofile', single)
  })
})


router.get('/planets/edit/:planet', (req, res) => {

  let Id = req.params.id

  fs.readFile('./data/planetinfo.json', 'utf8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
    let planetDetails = JSON.parse(data)
    console.log(planetDetails)

    let single = planetDetails.planets.find((item) => item.id == Id)

    console.log(single)
    res.render('planets/edit', single)
  })
})


router.post('/planets/edit/:id', (req, res) => {

  let Id = req.params.id

  let newData = req.body
  console.log("body", newData)



  fs.readFile('./data/planetinfo.json', 'utf8', (err, data) => {
    if (err) console.log(err)


    let planetDetails = JSON.parse(data)
    let single = planetDetails.planets.find((item) => item.planet == Id)

    // single.planet = newData.planet
    single.moons = newData.moons
    single.diameter = newData.diameter
    single.distanceFromSun = newData.distanceFromSun

    fs.writeFile('./data/planetinfo.json', JSON.stringify(planetDetails), (err) => {
      if (err) {
        res.send("Error Happened")
        return
      }
      res.redirect("/planets/" + Id)
      let planetDetails = JSON.parse(data)
    })

  })

})

module.exports = router


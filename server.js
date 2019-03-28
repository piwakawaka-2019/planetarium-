const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const planetRoutes = require('./routes')

server.use('/', planetRoutes)
module.exports = server
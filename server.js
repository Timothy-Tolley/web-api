const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/users')

const server = express()

const apiRoutes = require('./routes')

// Middleware
server.use(bodyParser.json())
server.use(express.static('public'))

// Routes
server.use('/users', users)

server.use('/api/v1', apiRoutes)

module.exports = server

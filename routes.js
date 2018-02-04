const express = require('express')

const router = express.Router()

const getUsers = require('./db').getUsers

const userData = getUsers()

router.get('/users', (req, res) => {
  res.json(userData)
})

module.exports = router

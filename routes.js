const express = require('express')

const router = express.Router()

const getUsers = require('./db').getUsers

const getUser = require('./db').getUser

const addUser = require('./db').addUser

router.get('/users', (req, res) => {
  getUsers()
    .then(users => res.json({users}))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', (req, res) => {
  getUser(req.params.id)
    .then(details => res.json(details))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/users', (req, res) => {
  addUser(req.body.user)
    .then(() => {
      res.status(200).send()
    })
})

module.exports = router

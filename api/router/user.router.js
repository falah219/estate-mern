const express = require('express');
const { test } = require('../controllers/user.controller');
const route = express.Router()


route.get('/api/test', test)

module.exports = route;
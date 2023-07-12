const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/home.controller.js')
const convertController = require('./src/controllers/convert.controller.js')

//rotas da  home
route.get('/', homeController.index)


//convert
route.get('/converter', convertController.index)
route.post('/converter/upload', convertController.uploadfile)

module.exports = route

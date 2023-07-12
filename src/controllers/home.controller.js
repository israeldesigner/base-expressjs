/* eslint-disable no-undef */
const HomeModel = require('../models/HomeModel')
const Excel = require('../models/ConvertModel')

exports.index = async (req, res) => {
  res.render('index')
  return
}
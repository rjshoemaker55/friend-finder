var path = require('path');
var express= require('express')


module.exports = function(app) {

  //ALLOWS USE OF STATIC ASSETS (STYLES.CSS FILE)
  app.use(express.static(path.join(__dirname, '../public')))

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}

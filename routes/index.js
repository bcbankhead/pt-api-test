var express = require('express');
var unirest = require('unirest');
var functions = require('../public/javascripts/serverside.js')
var ptkey = process.env.ptracker;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var projId = 1374602;
  var ptURL = 'https://www.pivotaltracker.com/services/v5/projects/'+ projId +'/stories';
  var ptheader = { 'X-TrackerToken': ptkey };

  unirest.get(ptURL)
  .headers(ptheader)
  .end(function (response) {

    var output = functions.objectParse(response.body);
    res.render('index', { title: 'PT Stories', stories: output });
  });
});

router.post('/update', function(req, res, next) {
  var projId = 1374602;
  var ptURL = 'https://www.pivotaltracker.com/services/v5/projects/'+ projId +'/stories';
  var ptheader = { 'X-TrackerToken': ptkey };

  unirest.post(ptURL)
  .headers(ptheader)
  .send({'name': req.body.name})
  .end(function (response) {
    res.redirect('/');
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var request = require('request');
var http = require('http');
var response = require('response');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    CLIENT_id: "633489205425-nn0coep2ntgrqj2e2v9agu94qgods8ia.apps.googleusercontent.com"
  });
});

router.get('/oauth2callback', function(req, res){
  res.render('oauth2callback', {
    CLIENT_id: "633489205425-nn0coep2ntgrqj2e2v9agu94qgods8ia.apps.googleusercontent.com"
});
});

module.exports = router;

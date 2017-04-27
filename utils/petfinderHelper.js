var request = require('request');
var qs = require('querystring');

var querystring = {
  key: process.env.PET_API_KEY,
  format: 'json',
  animal: 'dog'
}

var getDogs = function(params, callback){

  for(var key in params){
    querystring[key] = params[key]
  }
  console.log("Query String: ", querystring);

  request({
    method: 'get',
    url: 'http://api.petfinder.com/pet.find',
    qs: querystring
  }, function(error, response, body){
    callback(body);
  })
}

module.exports = getDogs;
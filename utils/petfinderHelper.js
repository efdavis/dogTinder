var request = require('request');
var qs = require('querystring');

var querystring = {
  key: process.env.PET_API_KEY,
  format: 'json',
  animal: 'dog'
}

var removeSmallPics = function(resultArray){
  resultArray = JSON.parse(resultArray);
  var animals = resultArray.petfinder.pets.pet;
  var modifyPhotos = function(photoArray){
    var newPhotos = [];
    for(var i = 0; i < photoArray.length; i++){
      if (photoArray[i]['@size'] === 'x'){
        newPhotos.push(photoArray[i].$t);
      }
    }
    return newPhotos;
  }
  animals.forEach(function(animal){
    animal.media.photos.photo = modifyPhotos(animal.media.photos.photo);
  })
  return resultArray;
}

var fetchAnimals = function(params, callback){

  for(var key in params){
    querystring[key] = params[key]
  }
  console.log("Query String: ", querystring);

  request({
    method: 'get',
    url: 'http://api.petfinder.com/pet.find',
    qs: querystring
  }, function(error, response, body){
    body = removeSmallPics(body);
    callback(body);
  })
}

module.exports = fetchAnimals;
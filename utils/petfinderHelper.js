const request = require('request');
var qs = require('querystring');

const querystring = {
  key: process.env.PET_API_KEY,
  format: 'json',
  animal: 'dog'
}

function removeSmallPics(resultArray) {
  resultArray = JSON.parse(resultArray);
  var animals = resultArray.petfinder.pets.pet;
  var filteredAnimals = [];
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
    if(animal.media.photos) {
      animal.media.photos.photo = modifyPhotos(animal.media.photos.photo);
      filteredAnimals.push(animal);
    }
  })
  return filteredAnimals;
}

function fetchAnimals(params, callback){

  for(var key in params){
    querystring[key] = params[key]
  }
  // console.log("Query String: ", querystring);

  request({
    method: 'get',
    url: 'http://api.petfinder.com/pet.find',
    qs: querystring
  }, function(error, response, body){
    body = removeSmallPics(body);
    callback(body);
  })
}

let fetchUsersAnimals = (animalId, callback) => {
  querystring.id = animalId;

  request({
    method: 'get',
    url: 'http://api.petfinder.com/pet.get',
    qs: querystring
  }, function(err, response, body) {
    callback(body);
  })  
};

fetchUsersAnimals(37609758, (body) => {console.log('FETCH ANIMALS: ', body)});

module.exports = fetchAnimals;
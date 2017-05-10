const request = require('request');
var qs = require('querystring');

const querystring = {
  key: process.env.PET_API_KEY,
  format: 'json',
  animal: 'dog'
}

function removeSmallPicsFromOneDog(dog) {
  dog = JSON.parse(dog).petfinder.pet

  var modifyPhotos = function(photoArray){
    var newPhotos = [];
    for(var i = 0; i < photoArray.length; i++){
      if (photoArray[i]['@size'] === 'x'){
        newPhotos.push(photoArray[i].$t);
      }
    }
    return newPhotos;
  }
  if(dog.media.photos) {
    dog.media.photos.photo = modifyPhotos(dog.media.photos.photo);
    return dog;
  } else {
    return null;
  }
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

exports.fetchAnimals = (params, callback) => {

  for(var key in params){
    querystring[key] = params[key]
  }

  request({
    method: 'get',
    url: 'http://api.petfinder.com/pet.find',
    qs: querystring
  }, function(error, response, body){
    let petArray = JSON.parse(body).petfinder.pets;
    // if the petArray has no pets:
    if (Object.keys(petArray).length === 0 && petArray.constructor === Object) {
      callback([]);
    } else {
      body = removeSmallPics(body);
      callback(body);
    }
  })
}

exports.getList = (list, callback) => {

  function getRecursive(listSoFar, results) {
    if(listSoFar.length === 0) {
      callback(results);
      return;
    }
    querystring.id = listSoFar[0];
    listSoFar.shift();
    request({
      method: 'get',
      url: 'http://api.petfinder.com/pet.get',
      qs: querystring
    }, function(error, response, body){
      if(error) {
        console.log(error);
      } else {
        results.push(removeSmallPicsFromOneDog(body));
        return getRecursive(listSoFar, results);
      }
    })

  }
  var emptyArr = [];
  getRecursive(list, emptyArr);

}





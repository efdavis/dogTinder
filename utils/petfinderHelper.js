const request = require('request');
var qs = require('querystring');

const querystring = {
  key: process.env.PET_API_KEY,
  format: 'json',
  animal: 'dog'
}

function removeSmallPicsFromOneDog(dog) {
  // resultArray = JSON.parse(resultArray);
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
  console.log(dog.name.$t)
  if(dog.media.photos) {
    dog.media.photos.photo = modifyPhotos(dog.media.photos.photo);
    return dog;
  } else {
    return null;
  }
}

function removeSmallPics(resultArray) {
  // resultArray = JSON.parse(resultArray);
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
  // console.log("Query String: ", querystring);

  request({
    method: 'get',
    url: 'http://api.petfinder.com/pet.find',
    qs: querystring
  }, function(error, response, body){
    body = JSON.parse(body);
    body = removeSmallPics(body);
    callback(body);
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


exports.fetchUsersAnimals = (animalIdArr, callback) => {
  let userAnimals = [];

  const recurseIds = (animalIdArr, callback) => {
    let animalId = animalIdArr.pop()

    if (animalId) {
    querystring.id = animalId.petFinderid;
    console.log('animalID: ', animalId);
      request({
        method: 'get',
        url: 'http://api.petfinder.com/pet.get',
        qs: querystring
      }, function(err, response, body) {
        body = JSON.parse(body);
        userAnimals.push(body);
        recurseIds(animalIdArr, callback);
      })  
    } else {
      console.log(userAnimals);
      userAnimals = removeSmallPics(userAnimals);
      callback(userAnimals);
    } 
  }

  recurseIds(animalIdArr, callback);
};


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


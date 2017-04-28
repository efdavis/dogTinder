const db = require('./dbConnection.js');
const Promise = require('bluebird');

const addUser = (email, password) => {
  db.User.create({
    email: email,
    password: password
  })
};

const addShelter = (address, phone, name, zip) => {
  db.Shelter.create({
    address: address,
    phone: phone,
    name: name,
    zip: zip
  })
};

const saveAnimals = (animalObjArr, callback) => {
  if (animalObjArr.length === 0) {
    callback();
  } else {
    const animal = animalObjArr.pop()

    db.Animal.findOrCreate({where: animal})
            .then(saveAnimals(animalObjArr, callback));
  }
};

const saveAnimalList = (animalObjArr, userID) => {
  db.User.find({id: userID})
         .then((user) => {
           saveAnimals(animalObjArr, () => {
             db.AnimalList.create()
                          .then((animalList) => {
                            animalList.setAnimals(animalObjArr);
                            animalList.setUser(user);
                          })
            })
         })
};


const dummyDataList = [{petFinderid: '67888682'}, {petFinderid: '0688876'}, {petFinderid: '047688889'}];

saveAnimalList(dummyDataList, 1);

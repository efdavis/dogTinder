const db = require('./dbConnection.js');

const addOrFindUser = (email, password, facebookID, callback) => {
  db.User.findOrCreate({where: {
    email: email,
    password: password,
    facebookID: facebookID
  }}).then((result) => callback(result[0].dataValues));
};

const addShelter = (address, phone, name, zip, callback) => {
  db.Shelter.create({
    address: address,
    phone: phone,
    name: name,
    zip: zip
  }).then((result) => { callback() })
};

const saveAnimals = (animalObjArr, callback) => {
  if (animalObjArr.length === 0) {
    callback();
  } else {
    const animal = animalObjArr.pop()

    db.Animal.findOrCreate({where: animal})
             .then(() => {
               saveAnimals(animalObjArr, callback)
             })
  }
};

const addBreedsToAnimal = (animalLookup, breeds, callback) => {
  db.Animal.findOne({where: animalLookup})
           .then( (animal) => {animal.setBreeds(breeds)} )
           .then( () => {callback()} )
};

const getAnimalBreeds = (animalId, callback) => {
  let queryString = `SELECT breeds.breed
    FROM breeds
    INNER JOIN "Animal_Breeds"
    ON "breedId" = breeds.id
    WHERE "Animal_Breeds"."animalId" = ${animalId};`;

  db.sequelize.query(queryString).spread((results, metadata) => {
    
    callback(results, metadata);
  });
};

const createAnimalList = (userLookup, callback) => {  
  db.AnimalList.create()
               .then((list) => {
                 db.User.findOne({where: userLookup})
                        .then((user) => {
                          list.setUser(user);
                        })
                        .then(() =>{
                          callback();
                        })
                        
               }) 
};

const addAnimalsToList = (UserId, animalIdArr, callback) => {
  db.AnimalList.findOne({where: {userId : UserId}})
               .then((list) => {
                 list.setAnimals(animalIdArr);
               })
               .then(callback())
};

const findUserList = (UserId, callback) => {
  db.AnimalList.findOne({where: {userId: UserId}})
               .then((list) => {
                 callback(list);
               })
};

const updateList = (list, animalIdArr, callback) => {
  if (animalIdArr.length > 0) {
    let animal = animalIdArr.pop();
    list.addAnimal(animal)
        .then(() => {
          updateList(list, animalIdArr, callback)
        })
  } else {
    callback();
  } 
}

const getUserAnimals = (listId, callback) => {
  let queryString = `SELECT animals."petFinderid"
    FROM "AnimalList_Animal"
    INNER JOIN animals
    ON "AnimalList_Animal"."animalId" = animals.id
    WHERE "AnimalList_Animal"."animalListId" = ${listId};`;

  db.sequelize.query(queryString).spread((results, metadata) => {
    
    callback(results, metadata);
  });
};

const findBreedIds = (breedObjArr, callback) => {
  let ids = [];

  const recurseAnimals = (breedObjArr, callback) => {
    if (breedObjArr.length > 0) {
      let currentBreed = breedObjArr.pop();
      db.Breed.findOne({where: currentBreed})
               .then((breed) => {
                 ids.push(breed.dataValues.id);
                 recurseAnimals(breedObjArr, callback);
               })
    } else {
      callback(ids);
    }
  }

  recurseAnimals(breedObjArr, callback);
};

const findAnimalIds = (animalObjArr, callback) => {
  let ids = [];

  const recurseAnimals = (animalObjArr, callback) => {
    if (animalObjArr.length > 0) {
      let currentAnimal = animalObjArr.pop();
      db.Animal.findOne({where: currentAnimal})
               .then((animal) => {
                 ids.push(animal.dataValues.id);
                 recurseAnimals(animalObjArr, callback);
               })
    } else {
      callback(ids);
    }
  }

  recurseAnimals(animalObjArr, callback);
};

const saveUserList = (userLookupArr, animalObjArr, callback) => {
  let userId;
  addOrFindUser(...userLookupArr, (userInfo) => {
    userId = userInfo.id;
    createAnimalList({id: userInfo.id}, () => {
      saveAnimals(animalObjArr, () => {
        findAnimalIds(animalObjArr, (result) => {
          addAnimalsToList(userId, result, () => {
            callback();
          });
        })
      })
    })
  })
};

const updateUserList = (userLookup, animalObjArr, callback) => {
};

// findUserList(12, (result) => {console.log(result)});

// getUserAnimals(25, (animals, metadata) => {console.log(animals)})

// findUserList(12, (result) => {
//   let list = result;
//   updateList(list, [4,5,6], () => {console.log('done!')})
// })



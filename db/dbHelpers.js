const db = require('./dbConnection.js');

exports.addOrFindUser = (email, password, facebookID, callback) => {
  db.User.findOrCreate({where: {
    email: email,
    password: password,
    facebookID: facebookID
  }}).then((result) => callback(result[0].dataValues));
};

exports.getUserId = (userLookUp, callback) => {
  db.User.findOrCreate({where: userLookUp})
         .then((result) => { 
           callback(result[0].dataValues.id) })
};

exports.addShelter = (address, phone, name, zip, callback) => {
  db.Shelter.create({
    address: address,
    phone: phone,
    name: name,
    zip: zip
  }).then((result) => { callback() })
};

exports.saveAnimals = (animalObjArr, callback) => {
  if (animalObjArr.length === 0) {
    callback();
  } else {
    const animal = animalObjArr.pop()
    db.Animal.findOrCreate({where: animal})
             .then(() => {
               exports.saveAnimals(animalObjArr, callback)
             })
  }
};

exports.addBreedsToAnimal = (animalLookup, breeds, callback) => {
  db.Animal.findOne({where: animalLookup})
           .then( (animal) => {animal.setBreeds(breeds)} )
           .then( () => {callback()} )
};

exports.getAnimalBreeds = (animalId, callback) => {
  let queryString = `SELECT breeds.breed
    FROM breeds
    INNER JOIN "Animal_Breeds"
    ON "breedId" = breeds.id
    WHERE "Animal_Breeds"."animalId" = ${animalId};`;

  db.sequelize.query(queryString).spread((results, metadata) => {
    callback(results, metadata);
  });
};

exports.createAnimalList = (userLookup, callback) => {  
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

exports.addAnimalsToList = (UserId, animalIdArr, callback) => {
  db.AnimalList.findOne({where: {userId : UserId}})
               .then((list) => {
                 list.setAnimals(animalIdArr);
               })
               .then(callback())
};

exports.findUserList = (UserId, callback) => {
  db.AnimalList.findOrCreate({where: {userId: UserId}})
               .then((result) => {
                 callback(result);
               })
};

exports.updateList = (list, animalIdArr, callback) => {
  if (animalIdArr.length > 0) {
    let animal = animalIdArr.pop();
    list[0].addAnimal(animal)
        .then(() => {
          exports.updateList(list, animalIdArr, callback)
        })
  } else {
    callback();
  } 
}

exports.getUserAnimals = (listId, callback) => {
  let queryString = `
    SELECT animals."petFinderid", animals.id
    FROM "AnimalList_Animal"
    INNER JOIN animals
    ON "AnimalList_Animal"."animalId" = animals.id
    WHERE "AnimalList_Animal"."animalListId" = ${listId};
  `;

  db.sequelize.query(queryString).spread((results, metadata) => {
    callback(results, metadata);
  });
};

exports.findBreedIds = (breedObjArr, callback) => {
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

exports.findAnimalIds = (animalObjArr, callback) => {
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

exports.removeDuplicatesFromAnimalList = (listId, updateAnimalIdArr, callback) => {

  let queryString = `
    SELECT "animalId" FROM "AnimalList_Animal"
    WHERE "animalListId" = ${listId};
  `

  db.sequelize.query(queryString).spread((results, metadata) => {
    animalIdsToAdd = [];
    exisitingList = results.map(id => id.animalId);

    updateAnimalIdArr.forEach((id) => {
      if (exisitingList.indexOf(id) === -1) {
        animalIdsToAdd.push(id);
      }
    });

    callback(animalIdsToAdd);
  })
};

exports.checkForUserList = (facebookID, callback) => {
  let queryString = `
    SELECT "animalLists".id 
    FROM "animalLists"
    INNER JOIN users
    ON users.id = "animalLists"."userId"
    WHERE users."facebookID" = '${facebookID}';
  `

  db.sequelize.query(queryString).spread((results, metadata) => {
    callback(results, metadata);
  })
}

exports.removeDogFromUserList = (animalListId, animalId, callback) => {
  let queryString = `
    DELETE FROM "AnimalList_Animal"
    WHERE "animalListId" = ${animalListId} AND "animalId" = ${animalId};
  `

  db.sequelize.query(queryString).spread((results, metdata) => {
    callback(results, metdata);
  })
}

exports.addDogToDatabase = (dogObj, callback) => {
  db.Animal.create(dogObj)
           .then((results) => {
             callback(results);
           })
}

exports.findDogTinderDogs = (query, callback) => {
  console.log(typeof query, query);
  db.Animal.findAll({where: query})
           .then((results) => {
             callback(results);
           })
}

exports.findBreedId = (breedName, callback) => {
  db.Breed.findOne({where: {breed: breedName}})
          .then((result) => {
            callback(result.dataValues.id);
          })
}

exports.filterForMatchBreeds = (queryBreed, animalArr, callback) => {

  let matches = [];

  const recurseAnimalArr = (animalArr, callback) => {
    if (animalArr.length > 0) {
      let animal = animalArr.pop();
      exports.getAnimalBreeds(animal.id, (breeds) => {
        breeds.forEach((breed) => { 
          if (breed.breed === queryBreed) {
            animal.breeds = breeds;
            matches.push(animal);
          }
        });

        recurseAnimalArr(animalArr, callback);
      })

    } else {
      // console.log('matches: ', matches);
      exports.formatAnimalList(matches, (reformatted) => {
        callback(reformatted);
      });
    }
  };

  recurseAnimalArr(animalArr, callback);
}


exports.formatAnimalList = (animalArr, callback) => {
  let reformatedList = [];

  const recurseAnimals = (animalArr, callback) => {
    if (animalArr.length > 0) {
      let animal = animalArr.pop();
      exports.getAnimalBreeds(animal.id, (breeds) => {
        breeds = breeds.map(breed => {return {$t: breed.breed}});
      
        animal = animal.dataValues;

        let reformat = {
          age: { $t: animal.age},
          animal: { $t: animal.animal},
          breeds: {
            breed: breeds
          },
          contact: {
            address1: { $t: animal.address1},
            address2: { $t: animal.address2},
            city: { $t: animal.city},
            email: { $t: animal.email},
            fax: { $t: 'none'},
            phone: { $t: animal.phone},
            state: { $t: animal.state},
            zip: { $t: animal.zip}
          },
          description: { $t: animal.description},
          id: { $t: animal.id},
          media: {
            photos: {
              photo: [animal.photo]
            }
          },
          mix: { $t: animal.mix},
          name: { $t: animal.name},
          option: { $t: null},
          sex: { $t: animal.sex},
          size: { $t: animal.size},
          status: { $t: null}
        };
        
        reformatedList.push(reformat);

        recurseAnimals(animalArr, callback)
      })
    } else {
      callback(reformatedList);
    } 
  };

  recurseAnimals(animalArr, callback);
}

exports.fetchDogs = (dogIdArr, callback) => {
  let dogs = [];

  const recurseDogIdArr = (dogIdArr) => {
    if (dogIdArr.length > 0) {
      let dogId = dogIdArr.pop();
      if(Number.isInteger(dogId)) {
        dogId = {id: dogId};
      }
      db.Animal.findById(dogId.id)
      .then((dog) => {
        dogs.push(dog);
        recurseDogIdArr(dogIdArr)
      })
      .catch(error => console.log(error));
    } else {
      callback(dogs);
    }
  };

  recurseDogIdArr(dogIdArr)
}

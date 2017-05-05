const db = require('./dbConnection.js');

const addUser = (email, password, facebookID, callback) => {
  db.User.findOrCreate({where: {
    email: email,
    password: password,
    facebookID: facebookID
  }}).then((result) => callback(result));
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

const createAnimalList = (userLookup, callback) => {  
  db.AnimalList.create()
               .then((list) => {
                 db.User.findOne({where: userLookup})
                        .then((user) => {
                          list.setUser(user);
                          callback(user, list);
                        })
               }) 
};

const addAnimalsToList = (UserId, animalObjArr, callback) => {
  db.AnimalList.findOne({where: {userId : UserId}})
               .then((list) => {
                 list.setAnimals(animalObjArr);
               })
               .then(callback())
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
}

const findAnimalIds = (animalObjArr, callback) => {
  let ids = [];

  const recurseAnimals = (animalObjArr, callback) => {
    if (animalObjArr.length > 0) {
      let currentAnimal = animalObjArr.pop();
      console.log('current animal: ', currentAnimal);
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
}



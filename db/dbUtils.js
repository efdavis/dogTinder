const helper = require('./dbHelpers');
const db = require('./dbConnection.js');

// Save user and new list to database
  // userLookupArr takes [email, password, facebookID]. Email and password can be null.
  // animalObjArr takes array of animal objects. EXAMPLE: [{petFinderid: 'xxxxxx'}, {petFinderid: 'xxxxxxxx'}, {petFinderid: 'xxxxxxx'}]
exports.saveUserList = (userLookupArr, animalObjArr, callback) => {
  let userId;
  helper.addOrFindUser(...userLookupArr, (userInfo) => {
    userId = userInfo.id;
    helper.createAnimalList({id: userInfo.id}, () => {
      let animalObjArrCopy = animalObjArr.slice()
      helper.saveAnimals(animalObjArrCopy, () => {
        helper.findAnimalIds(animalObjArr, (result) => {
          helper.addAnimalsToList(userId, result, () => {
            callback();
          });
        })
      })
    })
  })
};

// Update existing user list
  // userLookup takes and object. Example {facebookID: 'xxxxxxxxxxxxxxxx'}
  // animalObjArr is the same as for saveUserList
exports.updateUserList = (userLookup, animalObjArr, callback) => {
  let animalIdArr;
  let animalObjArrCopy = animalObjArr.slice()
  helper.saveAnimals(animalObjArrCopy, () => {
    helper.findAnimalIds(animalObjArr, (ids) => {
      animalIdArr = ids;
      helper.getUserId(userLookup, (userId) => {
        helper.findUserList(userId, (list) => {
          helper.removeDuplicatesFromAnimalList(list.id, animalIdArr, (newAnimalsToAdd) => {
            helper.updateList(list, newAnimalsToAdd, () => {
              callback();
            })
          })
        })
      })
    })
  })
};

// Returns array of petFinderids
  // userLookup is an object EXAMPLE: {facebookID: 'xxxxxxxxxxxxxxxx'}
exports.fetchUserAnimals = (userLookup, callback) => {
  helper.getUserId(userLookup, (id) => {
    helper.findUserList(id, (list) => {
      helper.getUserAnimals(list.dataValues.id, (results) => {
        callback(results);
      })
    })
  })
}

exports.doesUserHaveList = (FacebookID, callback) => {
  helper.checkForUserList(FacebookID, (results, metadata) => {
    if (results.length > 0) {
      callback(true);
    } else {
      callback(false);
    }
  })
}

exports.removeAnimalFromUsersList = (FacebookID, petFinderId, callback) => {
  let listId;
  let animalId;

  helper.checkForUserList(FacebookID, (result) => {
    console.log(result[0].id)
    listId = result[0].id;
    helper.findAnimalIds([{petFinderid: petFinderId}], (result) => {
      animalId = result[0];
      helper.removeDogFromUserList(listId, animalId, () => {
        callback();
      })
    })
  })
} 

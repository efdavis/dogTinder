const Sequelize = require('sequelize');

const sequelize = new Sequelize('dogtinder', null, null, {host: 'localhost', dialect: 'postgres', underscored: true});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  facebook: Sequelize.STRING

});

const AnimalList = sequelize.define('animalList', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

const Animal = sequelize.define('animal', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  petFinderid: {type: Sequelize.STRING, unique: true},
  dogTinderDB: Sequelize.BOOLEAN,
  name: Sequelize.STRING,
  species: Sequelize.STRING,
  age: Sequelize.STRING,
  sex: Sequelize.STRING,
  size: Sequelize.STRING,
  description: Sequelize.TEXT
});

const Shelter = sequelize.define('shelter', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  name: Sequelize.STRING,
  zip: Sequelize.INTEGER
});

const Breed = sequelize.define('breed', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  breed: Sequelize.STRING  
});

AnimalList.belongsTo(User);

AnimalList.belongsToMany(Animal, {through: 'AnimalList_Animal'});
Animal.belongsToMany(AnimalList, {through: 'AnimalList_Animal'});

Animal.belongsTo(Shelter);

Animal.belongsToMany(Breed, {through: 'Animal_Breeds'});
Breed.belongsToMany(Animal, {through: 'Animal_Breeds'});

sequelize.sync();


exports.sequelize = sequelize;
exports.User = User;
exports.AnimalList = AnimalList;
exports.Animal = Animal;
exports.Shelter = Shelter;
exports.Breed = Breed;

// Shelter.create({
//   address: '123 Main St.',
//   phone: '123-456-7890',
//   name: 'Test Shelter',
//   zip: '12345'
// })

// Animal.create({
//   dogTinderDB: true,
//   name: 'Cooper',
//   species: 'Dog',
//   age: 'Young',
//   sex: 'M',
//   size: 'L',
//   description: 'This test dog is one of a kind'
// }).then((animal) => {
//            Breed.create({
//              breed: 'Australian Cattle Dog (Blue Heeler)'
//            })
//         })
//    .then()


// Breed.create({
//   breed: 'Shepherd'
// })

// Animal.findOne({name: 'tester dog'}).then((dog) => {
//   Breed.findOne({breed: 'Pug'})
//          .then((breed) => {
//           //  dog.addBreed(breed);
//            console.log('breed: ', breed);
//          })
// });

// Animal.findOne({name: 'tester dog'})
//       .then((dog) => dog.getBreeds()).then((breeds) => console.log(breeds[0].dataValues));

// Animal_Breeds.findAll({}).then((breeds) => console.log(breeds));

// Bre




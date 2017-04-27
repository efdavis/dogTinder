const Sequelize = require('sequelize');

const sequelize = new Sequelize('dogtender', null, null, {host: 'localhost', dialect: 'postgres', underscored: true});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  message: Sequelize.STRING
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
  counter: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
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
Animal.belongsTo(Shelter);
Animal.hasMany(Breed, {as: 'Breeds'});


sequelize.sync();

module.exports = sequelize;

// Shelter.create({
//   address: '123 Main St.',
//   phone: '123-456-7890',
//   name: 'Test Shelter',
//   zip: '12345'
// })

// Animal.create({
//   dogTinderDB: true,
//   name: 'tester dog',
//   species: 'dog',
//   age: 'young',
//   sex: 'm',
//   size: 'L',
//   description: 'This test dog is one of a kind'
// })

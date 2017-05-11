const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASENAME , process.env.DB_USERNAME, process.env.DB_PASSWORD, {host: process.env.DB_HOST, dialect: 'postgres', underscored: true});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  facebookID: Sequelize.STRING
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
  photo: Sequelize.STRING,
  animal: Sequelize.STRING,
  age: Sequelize.STRING,
  sex: Sequelize.STRING,
  size: Sequelize.STRING,
  mix: Sequelize.STRING,
  description: Sequelize.TEXT,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
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




const Sequelize = require('sequelize');

const sequelize = new Sequelize('dogTinder', null, null, {host: 'localhost', dialect: 'postgres'});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: Sequelize.STRING,
  message: Sequelize.STRING
});

sequelize.sync()
         .then(() => {
           return User.create({
             username: 'Joshua',
             message: 'Is this thing on?'
           })
         })
         .then((entry) => {
           console.log(entry);
         });

module.exports = sequelize;
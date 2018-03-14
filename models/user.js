'use strict';
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt');
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  User.associate = model => {
  User.hasMany(model.Transaction, { foreignKey: 'userId' });
};
    User.beforeCreate((user, options) => {
    const saltRounds = 10;
    const myPlaintextPassword = user.password;
    return  bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
      user.password = hash
    });
  });
  return User;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Operator = sequelize.define('Operator', {
    nama_operator: DataTypes.STRING,
    operatorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Operator.associate = model => {
  Operator.hasMany(model.Transaction, { foreignKey: 'operatorId' })
};
  return Operator;
};

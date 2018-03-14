'use strict';
module.exports = (sequelize, DataTypes) => {
  var Voucher = sequelize.define('Voucher', {
    harga: DataTypes.INTEGER,
    voucherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    Voucher.associate = model => {
    Voucher.hasMany(model.Transaction, { foreignKey: 'voucherId' });
  };
  return Voucher;
};

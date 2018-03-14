'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    phone_number: DataTypes.INTEGER,
    operator: DataTypes.STRING,
    voucher: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    operatorId: DataTypes.INTEGER,
    voucherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    Transaction.associate = model => {
    Transaction.belongsTo(model.Operator, { foreignKey: 'operatorId' });
    Transaction.belongsTo(model.Voucher, { foreignKey: 'voucherId' });
    Transaction.belongsTo(model.User, { foreignKey: 'userId' });
  };
  return Transaction;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    models.User.hasMany(models.Post, { foreignKey: 'userId', sourceKey: 'id', as: 'Posts' });
  };
  return User;
};

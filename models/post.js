'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {});
  Post.associate = function (models) {
    models.Post.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
  };
  return Post;
};

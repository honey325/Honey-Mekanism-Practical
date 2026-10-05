'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comments.belongsTo(models.Books,{
    foreignKey: "id",
    as:"bookId"
  })
  Comments.belongsTo(models.User,{
    foreignKey: "id",
    as:"UserId"
  })
    }
  }
  Comments.init({
    text: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};
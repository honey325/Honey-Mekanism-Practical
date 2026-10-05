'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
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
  Ratings.init({
    rating: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ratings',
  });
  return Ratings;
};
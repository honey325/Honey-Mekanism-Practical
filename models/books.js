'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.hasMany(models.Comments, { 
    foreignKey: 'id', 
    as: 'bookId' 
  });
  Books.hasMany(models.Ratings, { 
    foreignKey: 'id', 
    as: 'bookId' 
  });
  
  Books.belongsTo(models.Category,{
    foreignKey: "id",
    as:"categoryId"
  })
  Books.belongsTo(models.User,{
    foreignKey: "id",
    as:"userId"
  })
  }
  }
  Books.init({
    name: DataTypes.STRING,
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
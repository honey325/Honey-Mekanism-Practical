'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Roles","createdAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Roles","updatedAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Users","createdAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Users","updatedAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
        await queryInterface.changeColumn("Categories","createdAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Categories","updatedAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
        await queryInterface.changeColumn("Books","createdAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Books","updatedAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
        await queryInterface.changeColumn("Comments","createdAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Comments","updatedAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
        await queryInterface.changeColumn("Ratings","createdAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
    await queryInterface.changeColumn("Ratings","updatedAt",{
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW      
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.changeColumn("Roles","createdAt",{
      allowNull: false,
      type: Sequelize.DATE
    })
    await queryInterface.changeColumn("Roles","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Users","createdAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Users","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Categories","createdAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Categories","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE     
    })
        await queryInterface.changeColumn("Books","createdAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Books","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Comments","createdAt",{
      allowNull: false,
      type: Sequelize.DATE
    })
    await queryInterface.changeColumn("Comments","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
        await queryInterface.changeColumn("Ratings","createdAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
    await queryInterface.changeColumn("Ratings","updatedAt",{
      allowNull: false,
      type: Sequelize.DATE      
    })
  }
};

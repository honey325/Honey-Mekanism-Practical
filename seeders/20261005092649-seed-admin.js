'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        const date = new Date();

       return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName:"honey",
          lastName: "andharia",
          email: "honeyandharia@gmail.com",
          role:1,
          createdAt:date,
          updatedAt:date
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', {email:"honeyandharia@gmail.com"}, {});

  }
};

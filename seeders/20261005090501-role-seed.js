'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date();
    console.log(date,"date");
    
   return queryInterface.bulkInsert(
      'Roles',
      [
        {
          role: 'admin',
          createdAt: date,
          updatedAt:date
        },
        {
          role:"auther",
          
          createdAt: date,
          updatedAt:date
        },
        {
          role: "reader",
          createdAt: date,
          updatedAt:date
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};

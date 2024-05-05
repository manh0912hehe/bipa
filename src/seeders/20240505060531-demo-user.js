'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users',[{
        firstName: 'Man',
        lastName: 'Siek',
        email: 'huumanhtqt2002@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: "admin",
        email: "admin@example.com",
        password: "hashedpassword1",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "johndoe",
        email: "johndoe@example.com",
        password: "hashedpassword2",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "janedoe",
        email: "janedoe@example.com",
        password: "hashedpassword3",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "manager",
        email: "manager@example.com",
        password: "hashedpassword4",
        role: "manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "driver1",
        email: "driver1@example.com",
        password: "hashedpassword5",
        role: "driver",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "driver2",
        email: "driver2@example.com",
        password: "hashedpassword6",
        role: "driver",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "support",
        email: "support@example.com",
        password: "hashedpassword7",
        role: "support",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "tester",
        email: "tester@example.com",
        password: "hashedpassword8",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "analyst",
        email: "analyst@example.com",
        password: "hashedpassword9",
        role: "analyst",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "guest",
        email: "guest@example.com",
        password: "hashedpassword10",
        role: "guest",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null, {})
  }
};

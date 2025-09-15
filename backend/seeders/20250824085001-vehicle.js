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
   await queryInterface.bulkInsert('Vehicles', [
    {
        plat_number: "B1234XYZ",
        model: "Toyota Avanza",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "B5678ABC",
        model: "Honda Jazz",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "D1122ZZ",
        model: "Suzuki Ertiga",
        status: "maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "L9988YY",
        model: "Mitsubishi Pajero",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "DK4321MN",
        model: "Toyota Innova",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "B9087QW",
        model: "Honda CR-V",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "AB3210CD",
        model: "Nissan X-Trail",
        status: "maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "F5555KL",
        model: "Toyota Fortuner",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "B7777EF",
        model: "Daihatsu Terios",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "E9090HI",
        model: "Mazda CX-5",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "B4455JK",
        model: "Hyundai Creta",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "B2233LM",
        model: "Kia Seltos",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "B8899NO",
        model: "Wuling Confero",
        status: "maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BA1112PQ",
        model: "Toyota Yaris",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BB2234RS",
        model: "Honda BR-V",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BD3345TU",
        model: "Suzuki XL7",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BE4456VW",
        model: "Mitsubishi Xpander",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BG5567XY",
        model: "Toyota Rush",
        status: "maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BH6678ZA",
        model: "Honda HR-V",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BK7789BC",
        model: "Daihatsu Xenia",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BL8890DE",
        model: "Toyota Corolla Cross",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        plat_number: "BM9901FG",
        model: "Hyundai Stargazer",
        status: "active",
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
    await queryInterface.bulkDelete('Vehicles',null, {})
  }
};

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
   await queryInterface.bulkInsert('Trips',[
     {
        vehicle_id: 1,
        start_time: new Date("2025-08-01T08:00:00"),
        end_time: new Date("2025-08-01T10:00:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 2,
        start_time: new Date("2025-08-02T09:00:00"),
        end_time: new Date("2025-08-02T12:00:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 3,
        start_time: new Date("2025-08-03T14:00:00"),
        end_time: new Date("2025-08-03T16:30:00"),
        status: "in-progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 4,
        start_time: new Date("2025-08-04T07:00:00"),
        end_time: new Date("2025-08-04T09:15:00"),
        status: "cancelled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 5,
        start_time: new Date("2025-08-05T10:00:00"),
        end_time: new Date("2025-08-05T13:45:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 6,
        start_time: new Date("2025-08-06T11:00:00"),
        end_time: new Date("2025-08-06T14:00:00"),
        status: "in-progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 7,
        start_time: new Date("2025-08-07T06:30:00"),
        end_time: new Date("2025-08-07T08:30:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 8,
        start_time: new Date("2025-08-08T13:00:00"),
        end_time: new Date("2025-08-08T15:30:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 9,
        start_time: new Date("2025-08-09T09:30:00"),
        end_time: new Date("2025-08-09T11:45:00"),
        status: "cancelled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 10,
        start_time: new Date("2025-08-10T12:00:00"),
        end_time: new Date("2025-08-10T15:30:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 11,
        start_time: new Date("2025-08-11T08:00:00"),
        end_time: new Date("2025-08-11T11:15:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 12,
        start_time: new Date("2025-08-12T07:45:00"),
        end_time: new Date("2025-08-12T10:00:00"),
        status: "in-progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 13,
        start_time: new Date("2025-08-13T15:00:00"),
        end_time: new Date("2025-08-13T17:15:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 14,
        start_time: new Date("2025-08-14T09:00:00"),
        end_time: new Date("2025-08-14T11:30:00"),
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vehicle_id: 15,
        start_time: new Date("2025-08-15T14:30:00"),
        end_time: new Date("2025-08-15T17:00:00"),
        status: "cancelled",
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
    await queryInterface.bulkDelete('Trips', null, {})
  }
};


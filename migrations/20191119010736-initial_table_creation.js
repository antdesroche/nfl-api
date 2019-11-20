'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('team', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      location: { type: Sequelize.STRING, },
      mascot: { type: Sequelize.STRING, },
      abbreviation: { type: Sequelize.STRING, },
      conference: { type: Sequelize.STRING, },
      division: { type: Sequelize.STRING, },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    
  })
   },
  down:  (queryInterface, Sequelize) => {
    
   return queryInterface.dropTable('team')
  }
}


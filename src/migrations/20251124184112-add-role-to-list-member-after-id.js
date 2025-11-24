module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('list_member', 'perfil', {
      type: Sequelize.STRING(20),
      allowNull: false,
      after: 'id',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('list_member', 'perfil');
  }
};
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('task', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      lista_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'list',
          key: 'id'
        }
      },
      responsavel_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      titulo: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      foi_concluido:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        toDefaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('task');
  }
};

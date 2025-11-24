import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'list',
        key: 'id'
      },
      field: 'lista_id'
    },
    assingned_to_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'responsavel_id:'
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'titulo'
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'descricao'
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'foi_concluido'
    }
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'task',
    timestamps: true,
    paranoid: true,
  },
);


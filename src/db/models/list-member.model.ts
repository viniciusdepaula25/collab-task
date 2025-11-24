import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class ListMember extends Model {}

ListMember.init(
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    perfil: {
      type: DataTypes.STRING(20),
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'List',
    tableName: 'list',
    timestamps: true,
    paranoid: true,
  },
);
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class List extends Model {}

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'titulo'
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'proprietario_id'
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
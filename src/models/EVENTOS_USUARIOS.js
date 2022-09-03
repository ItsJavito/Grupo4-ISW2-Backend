import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class EVENTOS_USUARIOS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    CO_USR: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USUARIOS',
        key: 'CO_USR'
      }
    },
    NU_EVNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'EVENTOS',
        key: 'NU_EVNT'
      }
    }
  }, {
    sequelize,
    tableName: 'EVENTOS_USUARIOS',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EVENTOS_USUARIOS_pkey",
        unique: true,
        fields: [
          { name: "CO_USR" },
          { name: "NU_EVNT" },
        ]
      },
    ]
  });
  }
}

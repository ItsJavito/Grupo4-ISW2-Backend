import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ESTADOS_USUARIO extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    CO_ESTD: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NO_ESTD: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ESTADOS_USUARIO',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ESTADOS_USUARIO_pkey",
        unique: true,
        fields: [
          { name: "CO_ESTD" },
        ]
      },
    ]
  });
  }
}

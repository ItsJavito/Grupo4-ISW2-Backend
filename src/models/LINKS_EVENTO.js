import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class LINKS_EVENTO extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    NU_REG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NU_EVNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'EVENTOS',
        key: 'NU_EVNT'
      }
    },
    TX_URL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LINKS_EVENTO',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LINKS_EVENTO_pkey",
        unique: true,
        fields: [
          { name: "NU_REG" },
          { name: "NU_EVNT" },
        ]
      },
    ]
  });
  }
}

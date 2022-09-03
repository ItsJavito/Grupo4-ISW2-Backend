import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class USUARIO_INVITADO_EVENTOS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    NU_EVNT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'EVENTOS',
        key: 'NU_EVNT'
      }
    },
    CO_USR_INVT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USUARIO_INVITADO',
        key: 'CO_USR_INVT'
      }
    },
    FH_INSCR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CO_ESTD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ESTADOS_USUARIO',
        key: 'CO_ESTD'
      }
    }
  }, {
    sequelize,
    tableName: 'USUARIO_INVITADO_EVENTOS',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "USUARIO_INVITADO_EVENTOS_pkey",
        unique: true,
        fields: [
          { name: "NU_EVNT" },
          { name: "CO_USR_INVT" },
        ]
      },
    ]
  });
  }
}

import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class EVENTOS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    NU_EVNT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NO_EVNT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    QT_PERS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QT_HRS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESC_EVENT: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    UBIC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FH_INICIO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FH_FIN: {
      type: DataTypes.DATE,
      allowNull: false
    },
    URL_EVNT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FG_VIG: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    URL_FOTO: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EVENTOS',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EVENTOS_pkey",
        unique: true,
        fields: [
          { name: "NU_EVNT" },
        ]
      },
    ]
  });
  }
}

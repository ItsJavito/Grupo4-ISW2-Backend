import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class USUARIOS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    CO_USR: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_USR: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CORREO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CONTRA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NOM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AP_PAT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AP_MAT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FH_NACIMIENTO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    FH_CREACION: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'USUARIOS',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "USUARIOS_pkey",
        unique: true,
        fields: [
          { name: "CO_USR" },
        ]
      },
    ]
  });
  }
}

import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _ESTADOS_USUARIO from  "./ESTADOS_USUARIO.js";
import _EVENTOS from  "./EVENTOS.js";
import _EVENTOS_USUARIOS from  "./EVENTOS_USUARIOS.js";
import _LINKS_EVENTO from  "./LINKS_EVENTO.js";
import _USUARIOS from  "./USUARIOS.js";
import _USUARIO_INVITADO from  "./USUARIO_INVITADO.js";
import _USUARIO_INVITADO_EVENTOS from  "./USUARIO_INVITADO_EVENTOS.js";

export default function initModels(sequelize) {
  const ESTADOS_USUARIO           = _ESTADOS_USUARIO.init(sequelize, DataTypes);
  const EVENTOS                   = _EVENTOS.init(sequelize, DataTypes);
  const EVENTOS_USUARIOS          = _EVENTOS_USUARIOS.init(sequelize, DataTypes);
  const LINKS_EVENTO              = _LINKS_EVENTO.init(sequelize, DataTypes);
  const USUARIOS                  = _USUARIOS.init(sequelize, DataTypes);
  const USUARIO_INVITADO          = _USUARIO_INVITADO.init(sequelize, DataTypes);
  const USUARIO_INVITADO_EVENTOS  = _USUARIO_INVITADO_EVENTOS.init(sequelize, DataTypes);

  EVENTOS.belongsToMany(USUARIOS, { as: 'CO_USR_USUARIOs', through: EVENTOS_USUARIOS, foreignKey: "NU_EVNT", otherKey: "CO_USR" });
  EVENTOS.belongsToMany(USUARIO_INVITADO, { as: 'CO_USR_INVT_USUARIO_INVITADOs', through: USUARIO_INVITADO_EVENTOS, foreignKey: "NU_EVNT", otherKey: "CO_USR_INVT" });
  USUARIOS.belongsToMany(EVENTOS, { as: 'NU_EVNT_EVENTOs', through: EVENTOS_USUARIOS, foreignKey: "CO_USR", otherKey: "NU_EVNT" });
  USUARIO_INVITADO.belongsToMany(EVENTOS, { as: 'NU_EVNT_EVENTOS_USUARIO_INVITADO_EVENTOs', through: USUARIO_INVITADO_EVENTOS, foreignKey: "CO_USR_INVT", otherKey: "NU_EVNT" });
  USUARIO_INVITADO_EVENTOS.belongsTo(ESTADOS_USUARIO, { as: "CO_ESTD_ESTADOS_USUARIO", foreignKey: "CO_ESTD"});
  ESTADOS_USUARIO.hasMany(USUARIO_INVITADO_EVENTOS, { as: "USUARIO_INVITADO_EVENTOs", foreignKey: "CO_ESTD"});
  EVENTOS_USUARIOS.belongsTo(EVENTOS, { as: "NU_EVNT_EVENTO", foreignKey: "NU_EVNT"});
  EVENTOS.hasMany(EVENTOS_USUARIOS, { as: "EVENTOS_USUARIOs", foreignKey: "NU_EVNT"});
  LINKS_EVENTO.belongsTo(EVENTOS, { as: "NU_EVNT_EVENTO", foreignKey: "NU_EVNT"});
  EVENTOS.hasMany(LINKS_EVENTO, { as: "LINKS_EVENTOs", foreignKey: "NU_EVNT"});
  USUARIO_INVITADO_EVENTOS.belongsTo(EVENTOS, { as: "NU_EVNT_EVENTO", foreignKey: "NU_EVNT"});
  EVENTOS.hasMany(USUARIO_INVITADO_EVENTOS, { as: "USUARIO_INVITADO_EVENTOs", foreignKey: "NU_EVNT"});
  EVENTOS_USUARIOS.belongsTo(USUARIOS, { as: "CO_USR_USUARIO", foreignKey: "CO_USR"});
  USUARIOS.hasMany(EVENTOS_USUARIOS, { as: "EVENTOS_USUARIOs", foreignKey: "CO_USR"});
  USUARIO_INVITADO_EVENTOS.belongsTo(USUARIO_INVITADO, { as: "CO_USR_INVT_USUARIO_INVITADO", foreignKey: "CO_USR_INVT"});
  USUARIO_INVITADO.hasMany(USUARIO_INVITADO_EVENTOS, { as: "USUARIO_INVITADO_EVENTOs", foreignKey: "CO_USR_INVT"});

  return {
    ESTADOS_USUARIO,
    EVENTOS,
    EVENTOS_USUARIOS,
    LINKS_EVENTO,
    USUARIOS,
    USUARIO_INVITADO,
    USUARIO_INVITADO_EVENTOS,
  };
}

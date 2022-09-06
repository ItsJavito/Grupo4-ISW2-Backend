import { UsuarioInvitado } from "../models/modelos";
/**
 * getAllUsuarioInvitado
 * * Controlador para traer todos los usuarioInvitado de la base de datos
 * @param {request object} req 
 * @param {response object} res 
 * @returns 
 */
export const getAllUsuarioInvitado = async (req, res)=>{
    try{
        const usuariosI= await UsuarioInvitado.findAll();
        res.json(usuariosI)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}
/** 
* * Función que crea nuevo Usuario invitado
 * ! El codigo de usuario invitado se autogenera
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 * /
 */
export const createUsuariosI= async (req, res)=>{
    try{
        const {
            NOM_USR,
            CORREO ,
            CONTRA ,
            NOM ,
            AP_PAT , 
            AP_MAT , 
            FH_NACIMIENTO,
            FH_CREACION
        }= req.body;

        const newUsuarioI = await UsuarioInvitado.create({
            NOM_USR: NOM_USR,
            CORREO: CORREO ,
            CONTRA: CONTRA ,
            NOM: NOM ,
            AP_PAT: AP_PAT , 
            AP_MAT: AP_MAT , 
            FH_NACIMIENTO: FH_NACIMIENTO,
            FH_CREACION: FH_CREACION
        })

        res.json(newUsuarioI)
    }catch (error) {
        return res.status(500).json({message: error.message})
    }
}

/**
 * getEvento
 * * Obtiene un evento, utilizando su CO_USR_INT
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 */


export const getUsuarioI = async (req, res)=>{
    try{
        const {id}= req.params;
        const usuarioI = await UsuarioInvitado.findOne({
            where: {
                CO_USR_INVT: id
            }
        })
        if (!usuarioI) return res.status(404).json({message: "No existe usuario"});
        res.json(usuarioI)
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}


/**
 * updateEvento
 * * Actualiza un evento, se ingresa su CO_USR_INVT como parámetro
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 */

export const updateUsuarioI = async (req, res)=>{
    try {
        const{id}= req.params;
        const{
            NOM_USR,
            CORREO ,
            CONTRA ,
            NOM ,
            AP_PAT , 
            AP_MAT , 
            FH_NACIMIENTO,
            FH_CREACION
        }= req.body;
        const usuarioI= await UsuarioInvitado.findByPk(id);

        usuarioI.NOM_USR = NOM_USR;
        usuarioI.CORREO = CORREO;
        usuarioI.CONTRA = CONTRA;
        usuarioI.NOM = NOM;
        usuarioI.AP_PAT = AP_PAT;
        usuarioI.AP_MAT = AP_MAT;
        usuarioI.FH_NACIMIENTO = FH_NACIMIENTO;
        usuarioI.FH_CREACION = FH_CREACION;
    
        await usuarioI.save();
        res.json({message: "Usuario invitado actualizado"});
    }catch (error){
        return res.status(500).json({message: error.message});
    }
    
}

/**
 * getEvento
 * * Elimina su evento utilizando su CO_USR_INVT
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 */

export const deleteUsuarioI = async (req,res) => {
    try {
        const {id} = req.params;
        await UsuarioInvitado.destroy({
            where: {
                CO_USR_INVT : id
            }
        });
        res.json({message: "Usuario invitado eliminado"});
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}



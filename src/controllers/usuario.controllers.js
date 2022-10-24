import {Usuarios} from "../models/modelos.js";

/*Controlador para get todos los usuarios*/
export const getAllUsuarios = async (req, res) =>{
    try {
        const usuarios = await Usuarios.findAll();
        console.log(usuarios)
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/*Controlador para get  usuario*/
export const getUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuarios.findOne({
            where: {
                NU_USR : id
            }
        })
        if (!usuario) return res.status(404).json({message : 'No existe Usuario'});
        res.json(usuario);

    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}

/*Controlador para CREAR usuarios*/

export const createUsuario = async (req, res) => {
    try {
        const {
            NOM_USR, 
            CORREO, 
            CONTRA, 
            NOM, 
            FH_CREACION,
            PAIS,
            RUC}= req.body;

        const newUsuario = await Usuarios.create({
            
            NOM_USR    :  NOM_USR, 
            CORREO     :  CORREO,
            CONTRA     :  CONTRA,
            NOM        :  NOM, 
            FH_CREACION:  FH_CREACION,
            PAIS       :  PAIS,
            RUC        :  RUC
        })
        res.json(newUsuario);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/*Controlador para MODIFICAR usuarios*/
export const updateUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const { 
            NOM_USR, 
            CORREO, 
            CONTRA, 
            NOM, 
            FH_CREACION,
            PAIS,
            RUC }= req.body;

        const usuario = await Usuarios.findByPK(id);
        
            
            usuario.NOM_USR    =  NOM_USR; 
            usuario.CORREO     =  CORREO;
            usuario.CONTRA     =  CONTRA;
            usuario.NOM        =  NOM; 
            usuario.FH_CREACION=  FH_CREACION;
            usuario.PAIS       =  PAIS;
            usuario.RUC        =  RUC;
        
        await usuario.save();
        res.json({message: "Usuario actualizado"});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/*Controlador para ELIMINAR usuarios*/
export const deleteUsuario = async (req,res) => {
    try {
        const {id} = req.params;
        await Usuarios.destroy({
            where: {
                NU_USR : id
            }
        });
        res.json({message: "Usuario eliminado"});
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}
import USUARIOS from "../models/USUARIOS.js";
import USUARIO_INVITADO from "../models/USUARIO_INVITADO.js";
import {RelationalBroker} from "./RelationalBroker.js";

/*
 TODO: UsuarioBroker las funciones del broker
 */
export class UsuarioBroker extends RelationalBroker{

    Usuarios;               //modelo de tabla usuarios
    Usuario_invitado;       //modelo de tablas usuario_invitado
    static singletoneInstance = null; //instancia para singletone 
    constructor(usuarios, usuario_invitado){
        super();
        this.Usuarios = usuarios;
        this.Usuario_invitado = usuario_invitado
    }

    static getInstance(usuarios, usuario_invitado){
        if(this.singletoneInstance === null){
            this.singletoneInstance = new UsuarioBroker(usuarios, usuario_invitado);
            return this.singletoneInstance;
        }else{
            return this.singletoneInstance; 
        }
    }
    
    // !GET 

    getAllUsuarios = async (req, res) => {
        try {
            const usuarios = await Usuarios.findAll();
            console.log(usuarios)
            res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }

    getUsuario = async (req, res) => {
        try {
            const {id} = req.params;
            const usuario = await Usuarios.findOne({
                where: {
                    NU_USR : id
                }
            })
            if (!usuario) return res.status(404).json({message : 'No existe Usuario'});
            res.status(200).json(usuario);
    
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
        
    }
    // !POST
    createUsuario = async (req, res) => {
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
            res.status(200).json(newUsuario);
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }
    
    // !PUT
    updateUsuario = async (req, res) => {
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
            res.status(200).json({message: "Usuario actualizado"});
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }

    
    //!DELETE
    deleteUsuario = async (req,res) => {
        try {
            const {id} = req.params;
            await Usuarios.destroy({
                where: {
                    NU_USR : id
                }
            });
            res.status(200).json({message: "Usuario eliminado"});
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }

}
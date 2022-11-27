import {RelationalBroker} from "./RelationalBroker.js";

/*
 TODO: UsuarioBroker las funciones del broker
 */
export class UsuarioBroker extends RelationalBroker{

    Usuarios;               //modelo de tabla usuarios
    UsuarioInvitado;       //modelo de tablas usuario_invitado
    static singletoneInstance = null; //instancia para singletone 
    constructor(usuarios, usuarioinvitado){
        super();
        this.Usuarios = usuarios;
        this.UsuarioInvitado = usuarioinvitado
    }

    //-------------------------------------------
    // USUARIO
    //------------------------------------------

    static async getInstance(usuarios, usuarioInvitado){
        if(this.singletoneInstance === null){
            this.singletoneInstance = new UsuarioBroker(usuarios, usuarioInvitado);
            return this.singletoneInstance;
        }else{
            return this.singletoneInstance; 
        }
    }
    
    // !GET 

    getAllUsuarios = async (req, res) => {
        try {
            const usuarios = await this.Usuarios.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }

    getUsuario = async (req, res) => {
        try {
            const {id} = req.params;
            const usuario = await this.Usuarios.findOne({
                where: {
                    CO_USR : id
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
    
            const newUsuario = await this.Usuarios.create({
                
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
    
            const usuario = await this.Usuarios.findOne({
                where: {
                    CO_USR : id
                }
            })

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
            await this.Usuarios.destroy({
                where: {
                    NU_USR : id
                }
            });
            res.status(200).json({message: "Usuario eliminado"});
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }

    //-------------------------------------------
    // USUARIO_INVITADO
    //------------------------------------------
    
    //*GET*
    getAllUsuarioI = async (req, res)=>{
        try{
            const usuariosI= await this.UsuarioInvitado.findAll();
            res.json(usuariosI)
        }catch(error){
            return res.status(500).json({message: error.message})
        }
    }

    getUsuarioI = async (req, res)=>{
        try{
            const {id}= req.params;
            const usuarioI = await this.UsuarioInvitado.findOne({
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

    deleteUsuarioI = async (req,res) => {
        try {
            const {id} = req.params;
            await this.UsuarioInvitado.destroy({
                where: {
                    CO_USR_INVT : id
                }
            });
            res.json({message: "Usuario invitado eliminado"});
            
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
        
    }

    //*PUT* 
    updateUsuarioI = async (req, res)=>{
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
            
            console.log(req.body);
            const usuarioI= await this.UsuarioInvitado.findByPk(id);
    
            usuarioI.NOM_USR = NOM_USR;
            usuarioI.CORREO = CORREO;
            usuarioI.CONTRA = CONTRA;
            usuarioI.NOM = NOM;
            usuarioI.AP_PAT = AP_PAT;
            usuarioI.AP_MAT = AP_MAT;
            usuarioI.FH_NACIMIENTO = FH_NACIMIENTO;
            usuarioI.FH_CREACION = FH_CREACION;
        
            await usuarioI.save();
            return res.status(200).json(usuarioI);
        }catch (error){
            return res.status(500).json({message: error.message});
        }
    }

    //*POST*
    createUsuariosI= async (req, res)=>{
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
    
            const newUsuarioI = await this.UsuarioInvitado.create({
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

    loginUsuario = async (req , res) => { 
        try {
            const correo = req.query.correo;
            const contra = req.query.contra; 

            const usuarioI = await this.UsuarioInvitado.findOne({
                where : {
                    CORREO : correo,
                    CONTRA : contra
                }
            })

            const usuario = await this.Usuarios.findOne({
                where : {
                    CORREO : correo, 
                    CONTRA : contra
                }
            })
            if(usuario){
                usuario["tipo"] = "entidad"
                return res.json(usuario)
            }
            else if(usuarioI){
                return res.json(usuarioI)
            }else{
                res.status(400).json({message : "No existe el usuario"})
            }

        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }
}
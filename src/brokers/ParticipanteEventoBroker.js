import EVENTOS from "../models/EVENTOS.js";
import {RelationalBroker} from "./RelationalBroker.js";

export class ParticipanteEventoBroker extends RelationalBroker{

    static singletonInstance    = null;   //singletone instancia

    constructor(eventosUsuarios, usuariosInvitadoEventos, usuarios, usuariosI, EstadosUsuario){
        super();
        this.EventosUsuarios = eventosUsuarios; 
        this.UsuariosInvitadoEventos = usuariosInvitadoEventos;
        this.Usuarios = usuarios;
        this.UsuarioInvitado = usuariosI
        this.EstadosUsuario = EstadosUsuario
    }

    static async getInstance(eventosUsuarios, usuariosInvitadoEventos, usuarios, usuariosI, EstadosUsuario){
        if(this.singletonInstance === null){
            this.singletonInstance = new ParticipanteEventoBroker(eventosUsuarios, usuariosInvitadoEventos, usuarios, usuariosI, EstadosUsuario);
            return this.singletonInstance;
        }else{
            return this.singletonInstance; 
        }
    }

    getEventosParticipantes = async (req, res) => {
        try {
            const {id} = req.params;
            const evento = await this.UsuarioInvitado.findAll({
                include:{
                    model: this.UsuariosInvitadoEventos,
                    as: "USUARIO_INVITADO_EVENTOs",
                    where:{
                        NU_EVNT : id
                    }
                }
            })
            if (!evento) return res.status(404).json({message : 'No existe participantes'});
            res.json(evento);
    
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }

    getAllEventosParticipantes = async (req, res) => {
        try {
            const participantes = await this.UsuariosInvitadoEventos.findAll();
            if(!participantes) return res.status(404).json({message : "no existen participantes"})
            res.json(participantes)
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }

    createEventosParticipantes = async (req, res) => {
        try {
            const {   
                NU_EVNT,
                CO_USR_INVT,
                FH_INSCR,
                CO_ESTD
            } = req.body;
            const participanteEvento = await this.UsuariosInvitadoEventos.create({
                NU_EVNT : NU_EVNT,
                CO_USR_INVT : CO_USR_INVT,
                FH_INSCR : FH_INSCR,
                CO_ESTD : CO_ESTD
            })
            if (!participanteEvento) return res.status(404).json({message : 'No existe participantes'});
            res.json(participanteEvento);
    
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }

    createEstadosUsuarios = async (req, res) => {
        try {
            const {
                NO_ESTD
            } = req.body;
            const estado = await this.EstadosUsuario.create({
                NO_ESTD : NO_ESTD
            })
            if(!estado) return res.status(404).json({message : "no existe estado"});
            res.json(estado);
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }

    getEstadosUsuarios = async (req, res) => {
        try {
            const estados = await this.EstadosUsuario.findAll();
            if(!estados) return res.status(404).json({message : "No existen estados"})
            res.json(estados);
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }

    deleteEstadosUsuarios = async(req, res) =>{
        try {
            const {id} = req.params;
            await this.EstadosUsuario.destroy({
                where:{
                    CO_ESTD : id
                }
            })
            res.json({message : `Estado ${id} se ha elminado`})
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
    }



}
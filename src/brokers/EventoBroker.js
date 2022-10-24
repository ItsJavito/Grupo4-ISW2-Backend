import EVENTOS from "../models/EVENTOS";

/*
 TODO: UsuarioBroker, implementar el singletone y las funciones del broker
 */
export class EventoBroker extends RelationalBroker{

    Eventos;                    //modelo de tabla eventos
    singletonInstance = null;   //singletone instancia

    constructor(Eventos){
        if(this.Eventos instanceof EVENTOS){
            this.Eventos = Eventos; 
        }else{
            throw console.error("No se puede crear el objeto : EventoBroker");
        }
    }

    static getInstance(Eventos){
        if(singletonInstance === null){
            singletonInstance = new EventoBroker(Eventos);
            return singletonInstance;
        }else{
            return singletonInstance; 
        }
    }

    
    // !GET 
    /**
     * getAllEventos
     * * Controlador para traer todos los eventos de la base de datos
     * @param {request object} req 
     * @param {response object} res 
     * @returns 
     */
    getAllEventos = async (req, res) =>{
        try {
            const eventos = await Eventos.findAll();
            console.log(eventos)
            res.json(eventos);
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }

    getEvento = async (req, res) => {
        try {
            const {id} = req.params;
            const evento = await Eventos.findOne({
                where: {
                    NU_EVNT : id
                }
            })
            if (!evento) return res.status(404).json({message : 'No existe Evento'});
            res.json(evento);
    
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
        
    }

    // !POST
    createEvento = async (req, res) => {
        try {
            const {
                NO_EVNT, 
                QT_PERS, 
                QT_HRS, 
                DESC_EVENT, 
                UBIC, 
                FH_INICIO, 
                FH_FIN,
                URL_EVNT,
                URL_FOTO,
                FG_VIG} = req.body;

            const newEvento = await Eventos.create({
                NO_EVNT    : NO_EVNT,
                QT_PERS    : QT_PERS,
                QT_HRS     : QT_HRS,
                DESC_EVENT : DESC_EVENT,
                UBIC       : UBIC,
                FH_INICIO  : FH_INICIO,
                FH_FIN     : FH_FIN,
                URL_EVNT   : URL_EVNT,
                FG_VIG     : FG_VIG,
                URL_FOTO   : URL_FOTO
            })
            res.status(200).json(newEvento);
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }
    
    // !PUT
    updateEvento = async (req,res) => {
        try {
            const {id} = req.params;
            const {
                NO_EVNT, 
                QT_PERS, 
                QT_HRS, 
                DESC_EVENT, 
                UBIC, 
                FH_INICIO, 
                FH_FIN, 
                URL_EVNT,
                URL_FOTO,
                FG_VIG} = req.body;
    
            const evento = await Eventos.findByPk(id);
    
            evento.NO_EVNT    = NO_EVNT;
            evento.QT_PERS    = QT_PERS;
            evento.QT_HRS     = QT_HRS;
            evento.DESC_EVENT = DESC_EVENT;
            evento.UBIC       = UBIC;
            evento.FH_INICIO  = FH_INICIO;
            evento.FH_FIN     = FH_FIN;
            evento.URL_EVNT   = URL_EVNT;
            evento.URL_FOTO   = URL_FOTO;
            evento.FG_VIG     = FG_VIG; 
    
            //para guardar las modificaciones al objeto en la base de datos
            await evento.save();
            res.json({message: "Evento actualizado"});
        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }    
    }

    //!DELETE
    deleteEvento = async (req,res) => {
        try {
            const {id} = req.params;
            await Eventos.destroy({
                where: {
                    NU_EVNT : id
                }
            });
            res.json({message: "Evento eliminado"});
            
        } catch (error) {
            return res.status(500).json({message : error.message})
        }
        
    }
    //---------------------------
    // * USUARIO INVITADO * 
    //---------------------------
    
}
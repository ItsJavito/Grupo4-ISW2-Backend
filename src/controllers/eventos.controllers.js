import { Eventos } from "../models/modelos.js";

/**
 * getAllEventos
 * * Controlador para traer todos los eventos de la base de datos
 * @param {request object} req 
 * @param {response object} res 
 * @returns 
 */
export const getAllEventos = async (req, res) =>{
    try {
        const eventos = await Eventos.findAll();
        console.log(eventos)
        res.json(eventos);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/**
 * createEvento
 * * Función que crea nuevo evento
 * ! El numero de evento se autogenera
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 * 
 *
 * !Ejemplo de POST para usar en la API 
    {
        "NO_EVNT"    : "Evento 1",
        "QT_PERS"    : 10,
        "QT_HRS"     : 2,
        "DESC_EVENT" : "Descripción de evento",
        "UBIC"       : "Ubicación de evento",
        "FH_INICIO"  : "2022-09-05T03:10:45+0000", 
        "FH_FIN"     : "2022-09-05T05:10:45+0000", 
        "URL_EVNT"   : "AA",
        "FG_VIG"     : "0"
    }
 */
export const createEvento = async (req, res) => {
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
            FG_VIG     : FG_VIG
        })
        res.json(newEvento);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/**
 * getEvento
 * * Obtiene un evento, utilizando su NU_EVNT
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 */
export const getEvento = async (req, res) => {
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

/**
 * updateEvento
 * * Actualiza un evento, se ingresa su NU_EVNT como parámetro
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 */
export const updateEvento = async (req,res) => {
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
        evento.FG_VIG     = FG_VIG; 

        //para guardar las modificaciones al objeto en la base de datos
        await evento.save();
        res.json({message: "Evento actualizado"});
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }    
}

/**
 * getEvento
 * * Elimina su evento utilizando su NU_EVNT
 * @param {request Object} req 
 * @param {response Object} res 
 * @returns 
 */
export const deleteEvento = async (req,res) => {
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
import app from './app.js'
import { InicializarModelos } from './models/modelos.js';
import { sequelize } from './database/database.js'

async function main() {
    try {
        InicializarModelos();
        await sequelize.sync({force: true});
        console.log("Conexión realizada con éxito")
        var PORT = process.env.PORT || 4000;
        app.listen(PORT);
        console.log("servidor corriendo en el puerto", PORT);
    } catch (error) {
        console.log("ocurrió un error con la conexión")
    }
}

main();
import { Sequelize } from "sequelize";
export let sequelize;

if(process.env.DATABASE_URL){
    sequelize = new Sequelize(
        process.env.DATABASE_URL, 
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                },
            }
        }
    );
}
else{
    sequelize = new Sequelize('genium', 'postgres', '', {
        host: 'localhost',
        dialect:  'postgres' 
    });
}

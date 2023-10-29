import app from './app.js';
import { sequelize } from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

async function main(){
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been stabliched');
        app.listen(PORT);
        console.log(`Server listening on port ${PORT}`);
    } catch (error) {
        console.log(error);
    };
};

main();

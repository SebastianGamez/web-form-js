// There's importing the ORM
import { Sequelize } from 'sequelize';

// Getting the db url through environment variables
const DB_URL: string = process.env.DB_URL!;

// There's connecting the db 
const sequelize = new Sequelize(DB_URL);

// There's exporting the db
export default sequelize;
// There's importing the dependencies
import express, { Application } from 'express';
import cors from 'cors';

// There's importing the local dependencies
import db from '../database/connection';
import PathsType from '../types/pathsType';
import userRoute from '../routes/v1/userRoute';

// There's creating server class
class ServerModel {
    
    // There's declaring the const values and properties
    private app: Application;
    private port: string;
    
    private paths: PathsType = {
        
        users: '/api/users'

    }

    // There's setting the const values and properties and starting the class methods
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    //There's testing the db connection
    public dbConnection = async() => {

        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            throw `Unable to connect to the database: ${error}`;
        }

    }

    // There's setting the middlewares
    public middlewares = (): void => {

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('../../public'));

    }

    // There's setting the routes
    public routes = (): void => {

        this.app.use(this.paths.users, userRoute)

    }

    // There's setting the server port
    public listen = (): void => {

        this.app.listen(this.port, (): void => console.log(`Listening at ${this.port} ..`));

    }

}

// There's exporting the ServerModel
export default ServerModel;

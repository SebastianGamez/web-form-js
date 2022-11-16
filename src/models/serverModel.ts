// There's importing the dependencies
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';


// There's creating server class
class ServerModel {
    
    // There's declaring the const values and properties
    private app: Application;
    private port: string;

    // There's setting the const values and properties and starting the class methods
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();
        this.routes();

    }

    // There's setting the middlewares
    public middlewares = (): void => {

        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, "../../public")));

    }

    // There's setting the routes
    public routes = (): void => {

        this.app.all(/.*/, (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, "../../public", "index.html"));
        });

    }

    // There's setting the server port
    public listen = (): void => {

        this.app.listen(this.port, (): void => console.log(`Listening at ${this.port} ..`));

    }

}

// There's exporting the ServerModel
export default ServerModel;

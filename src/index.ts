// There's setting the local variables
import dotenv from 'dotenv';
dotenv.config();

// There's importing the server to create a new app
import ServerModel from './models/serverModel';


// There's creating the app
const app: ServerModel = new ServerModel();

// There's activating the server
app.listen();

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// There's importing the dependencies
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// There's importing the local dependencies
const connection_1 = __importDefault(require("../database/connection"));
const userRoute_1 = __importDefault(require("../routes/v1/userRoute"));
// There's creating server class
class ServerModel {
    // There's setting the const values and properties and starting the class methods
    constructor() {
        this.paths = {
            users: '/api/users'
        };
        //There's testing the db connection
        this.dbConnection = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                throw `Unable to connect to the database: ${error}`;
            }
        });
        // There's setting the middlewares
        this.middlewares = () => {
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.static('../../public'));
        };
        // There's setting the routes
        this.routes = () => {
            this.app.use(this.paths.users, userRoute_1.default);
        };
        // There's setting the server port
        this.listen = () => {
            this.app.listen(this.port, () => console.log(`Listening at ${this.port} ..`));
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
}
// There's exporting the ServerModel
exports.default = ServerModel;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// There's importing the dependencies
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// There's creating server class
class ServerModel {
    // There's setting the const values and properties and starting the class methods
    constructor() {
        // There's setting the middlewares
        this.middlewares = () => {
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.static(path_1.default.join(__dirname, "../../public")));
        };
        // There's setting the routes
        this.routes = () => {
            this.app.all(/.*/, (req, res) => {
                res.sendFile(path_1.default.join(__dirname, "../../public", "index.html"));
            });
        };
        // There's setting the server port
        this.listen = () => {
            this.app.listen(this.port, () => console.log(`Listening at ${this.port} ..`));
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.middlewares();
        this.routes();
    }
}
// There's exporting the ServerModel
exports.default = ServerModel;

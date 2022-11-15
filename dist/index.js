"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// There's setting the local variables
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// There's importing the server to create a new app
const serverModel_1 = __importDefault(require("./models/serverModel"));
// There's creating the app
const app = new serverModel_1.default();
// There's activating the server
app.listen();

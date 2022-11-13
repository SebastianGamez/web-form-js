"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// There's importing the dependencies
const express_1 = __importDefault(require("express"));
// There's importing the controller
const userController_1 = __importDefault(require("../../controllers/userController"));
// Getting the controller methods
const { createUser } = new userController_1.default();
// Separating the maps logic, creating a new route
const userRoute = express_1.default.Router();
// Implementing the controller method in a CRUD request, this request is created for save a new user
userRoute.post('/register', createUser);
// Exporting the route
exports.default = userRoute;

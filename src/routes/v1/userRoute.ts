// There's importing the dependencies
import express, { Router } from "express";

// There's importing the controller
import UserController from "../../controllers/userController";

// Getting the controller methods
const { createUser, validateUser } = new UserController();

// Separating the maps logic, creating a new route
const userRoute: Router = express.Router();

// Implementing the controller method in a CRUD request, this request is created for save a new user
userRoute.post('/register', createUser);

// Implementing the controller method in a CRUD request, this request is created for login a new user
userRoute.post('/login', validateUser);

// Exporting the route
export default userRoute;

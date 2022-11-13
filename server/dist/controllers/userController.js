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
// There's importing the local dependencies
const userService_1 = __importDefault(require("../services/userService"));
// Declaring the controller
class UserController {
    constructor() {
        // Declaring the user service
        this.userService = new userService_1.default();
        // This method was created to be used at CRUD method, it returns a response through the res param
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // There's creating an user and saving the response in two variables
            const { successful: userSaved, message } = yield this.userService.createUser(req.body.user);
            // There's checking the result variable and sending the response
            if (userSaved)
                return res.status(200).json({
                    status: 200,
                    res: message
                });
            res.status(400).json({
                status: 400,
                res: message
            });
        });
    }
}
// There's exporting the controller
exports.default = UserController;

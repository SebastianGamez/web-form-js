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
const bcrypt_1 = __importDefault(require("bcrypt"));
;
const userModel_1 = __importDefault(require("../models/userModel"));
const userSchema_1 = __importDefault(require("../schemas/userSchema"));
// Declaring the user service
class UserService {
    constructor() {
        // Getting access to the db through the model
        this.userModel = userModel_1.default;
        // This method create an user and returns a personalized response
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            // Creating a general response
            let response;
            try {
                // Validating the information received
                const userValidated = yield userSchema_1.default.validateAsync(user);
                // Validating email received
                const emailRegistered = yield this.userModel.findOne({ where: { email: userValidated.email } });
                let msg;
                if (emailRegistered === null) {
                    // Encrypting the pass
                    const passwordHashed = yield bcrypt_1.default.hash(user.password, 10);
                    // Saving the validated and encrypted information
                    yield this.userModel.create(Object.assign(Object.assign({}, userValidated), { password: passwordHashed }));
                    msg = 'User created successful';
                }
                else
                    msg = `Email already in use`;
                //Setting the response
                response = {
                    successful: true,
                    message: msg
                };
            }
            catch (error) {
                //Setting the response with the error
                response = {
                    successful: false,
                    message: `Error saving the user ${error}`
                };
            }
            // There's returning the response
            return response;
        });
        // This method login an user and returns a personalized response
        this.validateUser = (user) => __awaiter(this, void 0, void 0, function* () {
            // Creating a general response
            let response;
            try {
                const userFound = yield this.userModel.findOne({ where: { email: user.email } });
                let msg;
                if (userFound !== null) {
                    // @ts-ignore: Unreachable code error
                    const hashed = userFound.password;
                    // Verify the pass
                    const passwordHashed = yield bcrypt_1.default.compare(user.password, hashed);
                    msg = passwordHashed ? `User logged successful` : `Email or password incorrect`;
                }
                else
                    msg = `Email or password incorrect`;
                //Setting the response
                response = {
                    successful: true,
                    message: msg
                };
            }
            catch (error) {
                //Setting the response with the error
                response = {
                    successful: false,
                    message: `Error logging the user ${error}`
                };
            }
            // There's returning the response
            return response;
        });
    }
}
// There's exporting the service
exports.default = UserService;

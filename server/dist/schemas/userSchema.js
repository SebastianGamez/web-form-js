"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// There's importing the dependencies
const joi_1 = __importDefault(require("joi"));
// This schema was create for validate the information received
const userSchema = joi_1.default.object({
    // Features properties
    firstName: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    lastName: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    email: joi_1.default.string()
        .email()
        .required(),
    nationality: joi_1.default.string()
        .required()
});
// Exporting the schema
exports.default = userSchema;

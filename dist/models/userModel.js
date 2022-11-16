"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Sequelize library 
const sequelize_1 = require("sequelize");
// Import db
const connection_1 = __importDefault(require("../database/connection"));
// There's defining the user to save into the db.
const UserModel = connection_1.default.define('User', {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    }
}, { timestamps: false });
UserModel.sync();
exports.default = UserModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// There's importing the ORM
const sequelize_1 = require("sequelize");
// Getting the db url through environment variables
const DB_URL = process.env.DB_URL;
// There's connecting the db 
const sequelize = new sequelize_1.Sequelize(DB_URL);
// There's exporting the db
exports.default = sequelize;

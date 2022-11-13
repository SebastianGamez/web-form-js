"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbUrl = process.env.DB_URL;
const sequelize = new sequelize_1.Sequelize('web-form-local', 'postgres', '123456', {
    host: 'localhost',
    port: 5444,
    dialect: 'postgres'
});
exports.default = sequelize;

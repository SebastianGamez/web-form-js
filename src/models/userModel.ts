// Sequelize library 
import { DataTypes } from 'sequelize';

// Import db
import db from '../database/connection';


// There's defining the user to save into the db.
const UserModel = db.define('User', {
    
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    nationality: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }

}, {timestamps: false});

UserModel.sync();

export default UserModel;





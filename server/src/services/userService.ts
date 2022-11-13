// There's importing the dependencies
import bcrypt from 'bcrypt'

// There's importing the local dependencies
import ResType from '../types/responseType';

import UserType from "../types/userType";
import UserModel from "../models/userModel"
import userSchema from '../schemas/userSchema'


// Declaring the user service
class UserService {

    // Getting access to the db through the model
    private userModel = UserModel;

    // This method create an user and returns a personalized response
    public createUser = async(user: UserType): Promise<ResType> => {

        // Creating a general response
        let response: ResType;

        try{
             // Validating the information received
            const userValidated = await userSchema.validateAsync(user);
            
            // Encrypting the pass
            const passwordHashed = await bcrypt.hash(user.password, 10);
            
            // Saving the validated and encrypted information
            await this.userModel.create( 
                { 
                    ...userValidated, 
                    password: passwordHashed
                } 
            );
            
            //Setting the response
            response = {
                successful: true,
                message: `User created with successful`
            }

        } catch(error){

            //Setting the response with the error
            response = {
                successful: false,
                message: `Error saving the user ${error}`
            }
        }

        // There's returning the response
        return response;

    }

}

// There's exporting the service
export default UserService;

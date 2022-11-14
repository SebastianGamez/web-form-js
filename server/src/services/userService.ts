// There's importing the dependencies
import bcrypt from 'bcrypt'

// There's importing the local dependencies
import ResType from '../types/responseType';

import UserType from "../types/userType";;
import UserModel from "../models/userModel";
import userSchema from '../schemas/userSchema';


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

             // Validating email received
            const emailRegistered = await this.userModel.findOne({ where: {email: userValidated.email} })
            
            let msg: string;
            if(emailRegistered === null){

                // Encrypting the pass
                const passwordHashed = await bcrypt.hash(user.password, 10);
                
                // Saving the validated and encrypted information
                await this.userModel.create( 
                    { 
                        ...userValidated, 
                        password: passwordHashed
                    } 
                );

                msg = 'User created successful';

            } else msg = `Email already in use`;
            
            //Setting the response
            response = {
                successful: true,
                message: msg
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
    
    // This method login an user and returns a personalized response
    public validateUser = async(user: UserType): Promise<ResType> => {

        // Creating a general response
        let response: ResType;

        try{
            
            
            const userFound = await this.userModel.findOne({ where: { email: user.email} });
            
            let msg: string;
            if(userFound !== null){
                
                // @ts-ignore: Unreachable code error
                const hashed: string = userFound.password;

                // Verify the pass
                const passwordHashed = await bcrypt.compare(user.password, hashed);

                msg = passwordHashed? `User logged successful`: `Email or password incorrect`;

            }else msg = `Email or password incorrect`;
            
            
            //Setting the response
            response = {
                successful: true,
                message: msg
            }

        } catch(error){

            //Setting the response with the error
            response = {
                successful: false,
                message: `Error logging the user ${error}`
            }
        }

        // There's returning the response
        return response;

    }

}

// There's exporting the service
export default UserService;

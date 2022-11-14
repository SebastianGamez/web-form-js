// There's importing the express types
import { Request, Response } from "express";

// There's importing the local dependencies
import UserService from "../services/userService";
import ResType from "../types/responseType";

// Declaring the controller
class UserController {

    // Declaring the user service
    private userService: UserService = new UserService();

    // This method was created to be used at CRUD method, it returns a response through the res param
    public createUser = async(req: Request, res: Response) => {

        // There's creating an user and saving the response in two variables
        const {successful: userSaved, message}: ResType = await this.userService.createUser(req.body.user);

        // There's checking the result variable and sending the response
        if(userSaved) return res.status(200).json({

            status: 200,
            res: message

        });
        res.status(400).json({

            status: 400,
            res: message

        });

    }

    // This method was created to be used at CRUD method, it returns a response through the res param
    public validateUser = async(req: Request, res: Response) => {

        // There's logging the user and saving the response in two variables
        const {successful: userLogged, message}: ResType = await this.userService.validateUser(req.body.user);

        // There's checking the result variable and sending the response
        if(userLogged) return res.status(200).json({

            status: 200,
            res: message

        });
        res.status(400).json({

            status: 400,
            res: message

        });

    }

}

// There's exporting the controller
export default UserController;

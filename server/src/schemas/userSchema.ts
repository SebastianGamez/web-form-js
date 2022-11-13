// There's importing the dependencies
import Joi from 'joi';

// This schema was create for validate the information received
const userSchema = Joi.object({
    
    // Features properties
    firstName: Joi.string()
                  .alphanum()
                  .min(3)
                  .max(30)
                  .required(),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    email: Joi.string()
            .email()
            .required(),

    nationality: Joi.string()
                    .required()

});

// Exporting the schema
export default userSchema;
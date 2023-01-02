import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    PORT: Joi.number().default(3005),
    MONGODB_URL: Joi.required(),
    DEFAULT_LIMIT: Joi.number().default(10),
    DEFAULT_OFFSET: Joi.number().default(0),
})
import Joi from "joi"

export const validateCreate = Joi.object({
    name: Joi.string().required().min(2).max(100),
    bio: Joi.string().required().min(2).max(500)
})

export const validateUpdate = Joi.object({
    
})
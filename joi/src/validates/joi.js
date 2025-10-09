import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required().min(0).messages({
    "number.min" : "Age khong duoc am"
  })
})

const data = {name: "ducdm", age: -1};

const {error, value} = schema.validate(data, {abortEarly:false});

if (error) {
  console.log("Du lieu khong hop le: ", error.details.map((err) => err.message));
} else {
  console.log("Du lieu hop le: ", value);
  
}
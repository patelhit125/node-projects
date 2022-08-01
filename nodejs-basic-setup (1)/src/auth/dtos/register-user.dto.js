import Joi from 'joi'

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.any().equal(Joi.ref('password')).required(),
})

export default schema

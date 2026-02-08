import Joi from 'joi';

export const validationMasterSchema = Joi.object({
  MYSQL_HOST: Joi.string().required(),
  MYSQL_USER: Joi.string().required(),
  MYSQL_PASSWORD: Joi.string().required(),
  MYSQL_DATABASE: Joi.string().required(),
  MYSQL_TCP_PORT: Joi.number().required(),
});

const Joi = require('joi');
const Cep = require('../services/cep');

const cepController = {
  ping: (_req, res) => {
    return res.status(200).json({message: 'pong!'});
  },
  getCep: async (req, res, next) => {
    const {cep} = req.params;
    const {error} = Joi.object({
      cep: Joi.string().not().empty().required(),
    }).validate({cep});

    if (error) return next(error);

    const response = await Cep.getCep(cep);
    if (response.error) return next(response.error);

    return response;
  },
  insertCep: async (req, res, next) => {
    const {cep, logradouro, bairro, localidade, uf} = req.body;
    const {error} = Joi.object({
      cep: Joi.string().min(9).max(9).required(),
      logradouro: Joi.string().not().empty().required(),
      bairro: Joi.string().not().empty().required(),
      localidade: Joi.string().not().empty().required(),
      uf: Joi.string().not().empty().required(),
    }).validate({cep, logradouro, bairro, localidade, uf});
    if (error) return next(error);
    const response = await Cep
        .insertCep(cep, logradouro, bairro, localidade, uf);
    if (response.error) return next(response.error);
    return res.status(201).json(response);
  },
};

module.exports = cepController;

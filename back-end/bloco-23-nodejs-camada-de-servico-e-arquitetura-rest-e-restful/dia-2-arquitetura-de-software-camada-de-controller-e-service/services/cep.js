const Cep = require('../model/cep');

const cepValidations = (cep) => {
  /* validations: */
  const cepWhitoutThing = cep.toString().replace('-', '');
  const cepRegex = /^\d{5}-?\d{3}$/i;
  const validateLenght = cepWhitoutThing.length === 8;
  const validateChars = cepRegex.test(cepWhitoutThing);
  return validateChars && validateLenght;
};

const getCep = async (cep) => {
  /* returns */
  const bool = cepValidations(cep);

  if (!bool) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  const ceps = await Cep.getCep(cep);
  if (!ceps) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  };
  return ceps;
};

const insertCep = async (cep, logradouro, bairro, localidade, uf) => {
  const cepWhitoutThing = cep.toString().replace('-', '');
  const alreadyExistsError = await Cep.getCep(cepWhitoutThing);
  if (alreadyExistsError) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  };
  const response = await Cep
      .insertCep(cepWhitoutThing, logradouro, bairro, localidade, uf);
  return response;
};

module.exports = {getCep, insertCep};


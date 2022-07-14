/* eslint-disable max-len */
const connection = require('./connection');

const getCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [data] = await connection.execute(query, [cep]);
  if (!data.length) return null;
  return data[0];
};

const insertCep = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';
  const response = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]).then(() => getCep(cep));
  return response;
};

module.exports = {
  getCep,
  insertCep,
};

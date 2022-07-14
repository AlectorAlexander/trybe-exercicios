const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const Errors = require('./middlewares/cepError');

const app = express();
app.use(bodyParser.json());

const cepController = require('./controller/cep');

app.get('/ping', cepController.ping );

app.get('/cep/:cep', rescue(cepController.getCep));
app.post('/cep', rescue(cepController.insertCep));

app.use(Errors);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Ouvindo a porta ${PORT}`);
});

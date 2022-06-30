const express = require('express');
const bodyParser = require('body-parser');

const user = require('./model/user');

const app = express();

app.use(bodyParser.json());

app.get('/user', async (req, res) => {
	const arrayUser = await user.getUsers();
	res.status(200).json({ arrayUser });
});

app.get('/user/:id', async (req, res) => {
	const { id } = req.params;
	const arrayUser = await user.getUsers();
	const index = arrayUser.findIndex(({ user_id }) => user_id === Number(id));
	if (index < 0) return res.status(404).json({
		error: true,
		message: 'Not Found!'
	});
	const response = arrayUser[index];
	res.status(200).json({ response });
});

app.post('/user', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	if (!user.validate(firstName, lastName, email, password)) return res.status(400).json({
		error: true,
		message: 'O campo "password" deve ter pelo menos 6 caracteres' 
	});
	await user.create(firstName, lastName, email, password);
	res.status(201).json({ 
		firstName,
		lastName,
		email,
		password
	});
}); 

app.put('/user/:id', async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, email, password } = req.body;
	const arrayUser = await user.getUsers();
	const index = arrayUser.findIndex(({ user_id }) => user_id === Number(id));
	if (index < 0) return res.status(404).json({
		error: true,
		message: 'Not Found!'
	});
	await user.edit(firstName, lastName, email, password, id);
	const response = arrayUser[index];
	res.status(200).json({ response });
});

app.listen(2004, () => {
	console.log('online');
});
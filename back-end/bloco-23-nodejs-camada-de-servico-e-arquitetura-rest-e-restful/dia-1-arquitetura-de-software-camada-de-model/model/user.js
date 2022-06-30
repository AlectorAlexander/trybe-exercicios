// eslint-disable-next-line no-unused-vars
const connection = require('./connection');

const validate = (firstName, lastName, email, password) => {
	if (!firstName || firstName === '') return false;
	if (!lastName || lastName === '') return false;
	if (!email || email === '' ) return false;
	if (!password || password === ''|| password.length < 6) return false;
	return true;
};

const create = async (firstName, lastName, email, password) => {
	connection.execute(
		'INSERT INTO model_example.user (firstName, lastName, email, password) VALUES (?,?,?,?)', [firstName, lastName, email, password], 
	);
};

const edit = async (firstName, lastName, email, password, id) => {
	connection.execute(
		'UPDATE model_example.user SET firstName=?, lastName=?, email=?, password=? WHERE user_id=?', [firstName, lastName, email, password, id], 
	);
};

const getUsers = async () => {
	const [user] = await connection.execute(
		'SELECT * FROM model_example.user'
	);
	return user;
};

module.exports = {
	validate,
	create,
	getUsers,
	edit
};
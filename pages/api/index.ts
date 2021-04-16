const fs = require('fs');

const handler = async (req, res) => {
	console.log(process.env);
	const val = await fetch(
		'https://api.jsonbin.io/b/6079328aee971419c4daae57/latest',
		{
			headers: {
				method: 'GET',
				'Secret-Key': process.env.JSONBIN_API_KEY,
			},
		}
	);
	const json = await val.json();
	res.status(200).send(json);
};

export default handler;

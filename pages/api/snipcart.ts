const btoa = require('btoa');

const handler = async (req, res) => {
	const { eventName } = req.body;
	if (eventName !== 'order.completed' || eventName === 'order.refund.created') {
		return res.status(200).end();
	}
	const request = await fetch('https://app.snipcart.com/api/products', {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const json = await request.json();
	await fetch('https://api.jsonbin.io/b/6079328aee971419c4daae57', {
		method: 'PUT',
		body: JSON.stringify(json),
		headers: {
			'Secret-Key': process.env.JSON_API_KEY,
			'Content-Type': 'application/json',
		},
	});
	res.status(201).send();
};

export default handler;

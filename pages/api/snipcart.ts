const btoa = require('btoa');

const fetchStock = async () => {
	const request = await fetch('https://app.snipcart.com/api/products', {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const json = await request.json();
	return json;
};

export let stock = fetchStock();

const handler = (req, res) => {
	const { eventName } = req.body;
	if (eventName !== 'order.completed') return res.status(200).end();
	stock = fetchStock();
	return res.status(201).end();
};

export default handler;

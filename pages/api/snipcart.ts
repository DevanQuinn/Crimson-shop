const btoa = require('btoa');
const fs = require('fs');
import catalog from './catalog.json';

const updateStock = async () => {
	const request = await fetch('https://app.snipcart.com/api/products', {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const json = await request.json();
	fs.writeFileSync('catalog.json', json);
	return json;
};

const checkIfEmpty = async () => {
	const isEmpty = Object.keys(catalog).length === 0;
	const returnValue = isEmpty ? await updateStock() : catalog;
	return returnValue;
};

const handler = async (req, res) => {
	const { eventName } = req.body;
	if (eventName !== 'order.completed' || eventName === 'order.refund.created') {
		return res.status(200).end();
	}
	updateStock();
	return res.status(201).end();
};

export default handler;
export { checkIfEmpty };

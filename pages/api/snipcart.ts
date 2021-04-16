const btoa = require('btoa');
const fs = require('fs');
import { isProduction } from '../../server';

const updateStock = async () => {
	const request = await fetch('https://app.snipcart.com/api/products', {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const json = await request.json();
	fs.writeFileSync('catalog.json', JSON.stringify(json), err =>
		console.log(err)
	);
	return json;
};

const checkIfEmpty = async () => {
	let isEmpty;
	let catalogStream;
	try {
		catalogStream = fs.readFileSync('catalog.json');
		isEmpty = Object.keys(catalogStream).length === 0;
	} catch (err) {
		isEmpty = true;
	}
	const returnValue = isEmpty ? await updateStock() : catalogStream;
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

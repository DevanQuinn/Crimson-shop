const btoa = require('btoa');
const fs = require('fs');
import { isProduction } from '../../server';
import catalog from './catalog.json';
import catalogTest from './catalog_test.json';

const updateStock = async () => {
	const request = await fetch('https://app.snipcart.com/api/products', {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const json = await request.json();
	fs.writeFileSync('catalog.json', JSON.stringify(json));
	return json;
};

const checkIfEmpty = async () => {
	const serverCatalog = isProduction ? catalog : catalogTest;
	const isEmpty = Object.keys(serverCatalog).length === 0;
	const returnValue = isEmpty ? await updateStock() : serverCatalog;
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

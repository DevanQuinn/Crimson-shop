const fs = require('fs');
import { checkIfEmpty } from './snipcart';

const handler = async (req, res) => {
	const catalog = await checkIfEmpty();
	res.json(catalog);
};

export default handler;

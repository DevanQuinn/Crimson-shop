import { stock } from './snipcart';

const handler = async (req, res) => {
	const stockAwait = await stock.catch(err => res.status(500).end());
	res.json(stockAwait);
};

export default handler;

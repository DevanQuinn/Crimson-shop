import { stock } from './snipcart';

const handler = async (req, res) => {
	const { id } = req.query;
	const stockAccess = await stock;
	const product = stockAccess.items.filter(
		item => item.userDefinedId === id.toString()
	);
	if (!product) return res.status(404).end();
	res.status(200).json(product[0]);
};

export default handler;

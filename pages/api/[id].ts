import { checkIfEmpty } from './snipcart';

const handler = async (req, res) => {
	const { id } = req.query;
	const catalog = await checkIfEmpty();
	const product = catalog.items.filter(
		item => item.userDefinedId === id.toString()
	);
	if (!product) return res.status(404).end();
	res.status(200).json(product[0]);
};

export default handler;

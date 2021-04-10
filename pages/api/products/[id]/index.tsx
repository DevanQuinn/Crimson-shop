import { products } from '../../products.json';

const handler = (req, res): Object => {
	const { id } = req.query;
	const product = products[id];
	if (!product) return res.sendStatus(404);
	else return res.status(200).json(product);
};

export default handler;

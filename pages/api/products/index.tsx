import products from '../products.json';

const handler = (req, res) => {
	res.status(200).json(products.catalog);
};

export default handler;

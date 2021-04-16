const handler = async (req, res) => {
	const { id } = req.query;
	const val = await fetch(
		'https://api.jsonbin.io/b/6079328aee971419c4daae57/latest',
		{
			headers: {
				method: 'GET',
				'Secret-Key': process.env.JSONBIN_API_KEY,
			},
		}
	);
	const json = await val.json();

	const product = json.items.filter(
		item => item.userDefinedId === id.toString()
	);
	if (!product) return res.status(404).end();
	res.status(200).json(product[0]);
};

export default handler;

const handler = async (req, res) => {
	const { eventName } = req.body;
	if (eventName !== 'order.completed' || eventName === 'order.refund.created') {
		return res.status(200).end();
	}
	const response = await fetch(process.env.DEPLOY_HOOK);
	if (response.status === 201) return res.status(201).send();
};

export default handler;

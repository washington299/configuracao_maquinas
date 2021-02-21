// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	switch (req.method) {
		case 'GET':
			res.status(200).json({ method: 'GET' });
			break;
		case 'POST':
			res.status(200).json({ method: 'POST' });
			break;
		case 'PUT':
			res.status(200).json({ method: 'PUT' });
			break;
		case 'DELETE':
			res.status(200).json({ method: 'DELETE' });
			break;
	}
};

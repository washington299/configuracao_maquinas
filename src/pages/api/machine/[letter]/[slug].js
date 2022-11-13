import dbConnection from 'services/dbConnection';

import Machine from 'models/machine';

import { formatSlugToString } from 'helpers/parsers';

export default async (req, res) => {
	await dbConnection();

	switch (req.method) {
		case 'GET':
			try {
				const machines = await Machine.find({
					extrusora: req.query.letter,
					slug: formatSlugToString(req.query.slug).toUpperCase(),
				});
				return res.status(200).json({ success: true, data: machines });
			} catch (error) {
				return res.status(400).json({ success: false, error });
			}
	}
};

import dbConnection from '../../services/dbConnection';
import Machine from '../../models/machine';

export default async (req, res) => {
	await dbConnection();

	switch (req.method) {
		case 'GET':
			try {
				const machines = await Machine.find({});
				res.status(200).json({ success: true, data: machines });
			} catch (error) {
				res.status(400).json({ success: false, error });
			}
		case 'POST':
			try {
				res.status(200).json({ method: 'POST' });
			} catch (error) {
				res.state(400).json({ success: false, error });
			}
		case 'PUT':
			try {
				res.status(200).json({ method: 'PUT' });
			} catch (error) {
				res.status(400).json({ success: false, error });
			}
	}
};

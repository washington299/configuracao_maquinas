import dbConnection from '../../services/dbConnection';
import Machine from '../../models/machine';

export default async (req, res) => {
	await dbConnection();

	switch (req.method) {
		case 'GET':
			try {
				const machines = await Machine.find({});
				return res.status(200).json({ success: true, data: machines });
			} catch (error) {
				return res.status(400).json({ success: false, error });
			}
		case 'POST':
			try {
				const machine = await Machine.create(req.body);
				return res.status(200).json({ success: true, data: machine });
			} catch (error) {
				return res.status(400).json({ success: false, error });
			}
		case 'PUT':
			try {
				await Machine.findOneAndUpdate({ name: req.body.name, slug: req.body.slug }, req.body);
				return res.status(200).json({ success: true });
			} catch (error) {
				return res.status(400).json({ success: false, error });
			}
		case 'DELETE':
			try {
				await Machine.findOneAndDelete({ name: req.body.name, slug: req.body.slug });
				return res.status(200).json({ success: true });
			} catch (error) {
				return res.status(400).json({ success: false, error });
			}
	}
};

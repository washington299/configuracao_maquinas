import mongoose from 'mongoose';

const dbConnection = async () => {
	if (mongoose.connection.readyState >= 1) return;

	return mongoose.connect(process.env.MONGODB_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	});
};

export default dbConnection;

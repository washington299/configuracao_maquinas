import axios from 'axios';

const api = axios.create({
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getMachineSettings = async name => {
	const { data } = await api.get(`/api/machine?name=${name}`);
	return data;
};

export const createMachineSettings = async settings => {
	const { data } = await api.post('/api/machine', settings);
	return data;
};

export const updateMachineSettings = async settings => {
	const { data } = await api.put('/api/machine', settings);
	return data;
};

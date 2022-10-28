import { useQuery } from '@tanstack/react-query';

import { api } from './api';

const getMachineSettings = async letter => {
	const { data } = await api.get(`/api/machine/${letter}`);

	return data;
};

export const useGetMachineSettings = (machineLetter) =>
	useQuery(['machine', machineLetter], async () => getMachineSettings(machineLetter));

export const createMachineSettings = async settings => {
	const { data } = await api.post('/api/machine', settings);

	return data;
};

export const updateMachineSettings = async settings => {
	const { data } = await api.put('/api/machine', settings);

	return data;
};

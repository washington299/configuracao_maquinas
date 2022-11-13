import { useQuery, useMutation } from '@tanstack/react-query';

import { api } from './api';

const getMachineSettings = async letter => {
	const { data } = await api.get(`/api/machine/${letter}`);

	return data;
};

export const useGetMachineSettings = (machineLetter) =>
	useQuery(['machine', machineLetter], async () => getMachineSettings(machineLetter));

// ---------------------------------------------- //

const getMachineSettingsData = async (letter, slug) => {
	const { data } = await api.get(`/api/machine/${letter}/${slug}`);

	return data;
};

export const useGetMachineSettingsData = (letter, slug, isCreating) => {
	if (!!isCreating) return { data: null, isLoading: false };

	return useQuery(['setting', letter, slug], async () => getMachineSettingsData(letter, slug), { enabled: !isCreating });
}

// ---------------------------------------------- //

export const createMachineSettings = async settings => {
	const { data } = await api.post('/api/machines', settings);

	return data;
};

export const updateMachineSettings = async settings => {
	const { data } = await api.put('/api/machines', settings);

	return data;
};

const deleteMachineSettings = async (payload) => {
	const { data } = await api.delete('/api/machines', { data: payload });

	return data;
}

export const useDeleteMachineSettings = () =>
	useMutation((payload) => deleteMachineSettings(payload));

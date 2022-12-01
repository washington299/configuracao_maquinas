import { fireEvent, screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { DeleteSettingModal } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
	query: { letter: "A", id: "teste-1" },
	push,
}));

const mutate = jest.fn();
let isSuccess;
const useDeleteMachineSettings = jest.spyOn(require('services/queries'), 'useDeleteMachineSettings');
useDeleteMachineSettings.mockImplementation(() => ({
	mutate,
	isSuccess,
}));

describe('<DeleteSettingModal />', () => {
	it('Should call mutate with correct params when deleted', () => {
		isSuccess = true;

		globalRender(<DeleteSettingModal isOpen />);

		fireEvent.click(screen.getByRole('button', { name: /Deletar/i }));

		expect(mutate).toHaveBeenCalledTimes(1);
		expect(mutate).toHaveBeenCalledWith({ name: "A", slug: "TESTE 1" });
		expect(push).toHaveBeenCalledWith("/machine/A");
	});
});

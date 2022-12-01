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

		const onCloseMock = jest.fn();

		globalRender(<DeleteSettingModal isOpen onClose={onCloseMock} settingId="123456" />);

		fireEvent.click(screen.getByRole('button', { name: /Deletar/i }));

		expect(mutate).toHaveBeenCalledTimes(1);
		expect(mutate).toHaveBeenCalledWith({ _id: "123456" });
		expect(onCloseMock).toHaveBeenCalledTimes(1);
	});
});

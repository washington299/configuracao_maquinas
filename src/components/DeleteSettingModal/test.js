import { fireEvent, screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { DeleteSettingModal } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
	query: { letter: "A", id: "teste" },
	push,
}));

const useMutation = jest.spyOn(require('@tanstack/react-query'), 'useMutation');
const mutate = jest.fn();
let isSuccess;

useMutation.mockImplementation(() => ({
	mutate,
	isSuccess,
}));

describe('<DeleteSettingModal />', () => {
	it('Should call react-query mutate with correct params when deleted', () => {
		isSuccess = true;

		globalRender(<DeleteSettingModal isOpen />);

		fireEvent.click(screen.getByRole('button', { name: /Deletar/i }));

		expect(mutate).toHaveBeenCalledTimes(1);
		expect(mutate).toHaveBeenCalledWith({ name: "A", slug: "TESTE" });
		expect(push).toHaveBeenCalledWith("/machine/A");
	});
});

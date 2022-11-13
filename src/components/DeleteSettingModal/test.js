import { fireEvent, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DeleteSettingModal } from '.';

const queryClient = new QueryClient();

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

		render(
			<QueryClientProvider client={queryClient}>
				<DeleteSettingModal isOpen />
			</QueryClientProvider>
		);

		fireEvent.click(screen.getByRole('button', { name: /Deletar/i }));

		expect(mutate).toHaveBeenCalledTimes(1);
		expect(mutate).toHaveBeenCalledWith({ name: "A", slug: "TESTE" });
		expect(push).toHaveBeenCalledWith("/machine/A");
	});
});

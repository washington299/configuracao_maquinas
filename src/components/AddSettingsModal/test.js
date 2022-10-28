import { fireEvent, render, screen } from '@testing-library/react';

import { AddSettingsModal } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();
const query = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query,
  asPath: '',
  route: '/'
}));

describe('<AddSettingsModal />', () => {
	it('Should render input with correct value', () => {
		render(<AddSettingsModal isOpen={true} />);

		const input = screen.getByLabelText(/Nome da configuração/i);
		const text = 'Test';

		fireEvent.change(input, { target: { value: text } });

		expect(input).toHaveValue(text);
	});

	it('Should show error message when user try to create with empty name', () => {
		render(<AddSettingsModal isOpen={true} />);

		const input = screen.getByLabelText(/Nome da configuração/i);
		const createButton = screen.getByRole('button', { name: /Criar/i });

		fireEvent.change(input, { target: { value: '' } });
		fireEvent.click(createButton);

		expect(screen.getByText(/Nome é obrigatório/i)).toBeInTheDocument();
	});

	it('Should dispatch onClose function when setting is created correctly', () => {
		const mockOnClose = jest.fn();

		render(<AddSettingsModal isOpen={true} onClose={mockOnClose} />);

		const input = screen.getByLabelText(/Nome da configuração/i);
		const createButton = screen.getByRole('button', { name: /Criar/i });

		fireEvent.change(input, { target: { value: 'Test' } });
		fireEvent.click(createButton);

		expect(mockOnClose).toHaveBeenCalledTimes(1);
		expect(push).toHaveBeenCalledWith(`/machine/${query.letter}/setting/test?create=true`);
	});
});

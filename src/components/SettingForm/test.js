import { fireEvent, render, screen } from '@testing-library/react';

import { SettingForm } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let query = {};

useRouter.mockImplementation(() => ({
	query,
}));

describe('<SettingForm />', () => {
	afterEach(() => {
		query = {};
	});

	it('Should hide delete button if there is create param on url query', () => {
		query = { create: true };

		render(<SettingForm />);

		expect(screen.queryByRole('button', { name: 'Deletar' })).not.toBeInTheDocument();
	});

	it('Should show delete button if there is create param on url query', () => {
		render(<SettingForm />);

		expect(screen.getByRole('button', { name: 'Deletar' })).toBeInTheDocument();
	});

	it('Should change inputs values correct', () => {
		render(<SettingForm />);

		const diametroInput = screen.getByPlaceholderText(/Diametro/i);
		const zona1Input = screen.getByPlaceholderText(/Zona 1/i);

		fireEvent.change(diametroInput, { target: { value: 10 } });
		fireEvent.change(zona1Input, { target: { value: 'Zona 1 teste' } });

		expect(diametroInput).toHaveValue("10");
		expect(zona1Input).toHaveValue('Zona 1 teste');
	});
});

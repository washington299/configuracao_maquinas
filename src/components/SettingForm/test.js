import { render, screen } from '@testing-library/react';

import { SettingForm } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<SettingForm />', () => {
	it('Should hide delete button if there is create param on url query', () => {
		useRouter.mockImplementation(() => ({
			query: { create: true },
		}));

		render(<SettingForm />);

		expect(screen.queryByRole('button', { name: 'Deletar' })).not.toBeInTheDocument();
	});

	it('Should show delete button if there is create param on url query', () => {
		useRouter.mockImplementation(() => ({
			query: {},
		}));

		render(<SettingForm />);

		expect(screen.getByRole('button', { name: 'Deletar' })).toBeInTheDocument();
	});
});

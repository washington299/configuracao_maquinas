import { fireEvent, screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { MachineLetterTemplate } from '.';

const push = jest.fn();
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
	query: { letter: 'A' },
	push
}));

let isLoading = false;
let data;
const useGetMachineSettings = jest.spyOn(require('services/queries'), 'useGetMachineSettings');
useGetMachineSettings.mockImplementation(() => ({
	data,
	isLoading,
}));

describe('<MachineLetterTemplate />', () => {
	beforeEach(() => {
		isLoading = false;
	});

	it('Should redirect to Home when arrow back is clicked', () => {
		globalRender(<MachineLetterTemplate />);

		expect(push).not.toBeCalled();

		fireEvent.click(screen.getByTestId('Arrow back'));

		expect(push).toHaveBeenCalledTimes(1);
		expect(push).toHaveBeenCalledWith('/');
	});

	it('Should render with correct title', () => {
		globalRender(<MachineLetterTemplate />);

		expect(screen.getByRole('heading', { name: /Máquina A lista de configurações/i })).toBeInTheDocument();
	});

	it('Should show a message when api returns empty data', () => {
		globalRender(<MachineLetterTemplate />);

		expect(screen.getByText(/Essa máquina ainda não possui configurações./i)).toBeInTheDocument();
	});

	it('Should show a Spinner if react-query isLoading is true', () => {
		isLoading = true;

		globalRender(<MachineLetterTemplate />);

		expect(screen.getByTestId('Spinner')).toBeInTheDocument();
	});

	it('Should show correct quantity of settings based on api response', () => {
		data = {
			data: [
				{ _id: 1, slug: 'slug-1' },
				{ _id: 2, slug: 'slug-2' },
				{ _id: 3, slug: 'slug-3' },
			],
		};

		globalRender(<MachineLetterTemplate />);

		expect(screen.getAllByRole('link')).toHaveLength(3);
		expect(screen.getByText('slug-1')).toBeInTheDocument();
	});
});

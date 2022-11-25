import { fireEvent, screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { MachineLetterTemplate } from '.';

const push = jest.fn();
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
	query: { letter: 'A' },
	push
}));

describe('<MachineLetterTemplate />', () => {
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
});

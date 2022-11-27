import { fireEvent, screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { MachineLetterSettingId } from '.';

const push = jest.fn();
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
	query: { letter: 'A' },
	push,
}));

describe('<MachineLetterSettingId />', () => {
	it('Should redirect Arrow back to correct route', () => {
		globalRender(<MachineLetterSettingId />);

		expect(push).not.toBeCalled();

		fireEvent.click(screen.getByTestId('Arrow back'));

		expect(push).toHaveBeenCalledWith('/machine/A');
	});
});

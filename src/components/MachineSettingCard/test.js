import { render, screen } from '@testing-library/react';

import { MachineSettingCard } from '.';

describe('<MachineSettingCard />', () => {
	it('Should render elements correctly', () => {
		const name = "Name";

		render(<MachineSettingCard name={name} />);

		expect(screen.getByText(name)).toBeInTheDocument();
	});
});

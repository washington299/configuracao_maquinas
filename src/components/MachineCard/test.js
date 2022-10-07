import { render, screen } from '@testing-library/react';

import { MachineCard } from '.';

describe('<MachineCard />', () => {
	it('Should render expected elements', () => {
		render(<MachineCard />);

		expect(screen.getByRole('heading', { name: /Máquina A/i })).toBeInTheDocument();
	});
});

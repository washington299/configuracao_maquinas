import { render, screen } from '@testing-library/react';

import { MachineCard } from '.';

describe('<MachineCard />', () => {
	it('Should render expected elements', () => {
		const letter = "A";

		render(<MachineCard letter={letter} />);

		expect(screen.getByRole('heading', { name: `Máquina ${letter}` })).toBeInTheDocument();
	});
});

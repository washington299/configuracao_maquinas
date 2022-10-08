import { render, screen } from '@testing-library/react';

import { MachineCard } from '.';

describe('<MachineCard />', () => {
	it('Should render expected elements', () => {
		const letter = "A";
		const settingsQtd = 18;

		render(<MachineCard letter={letter} settingsQtd={18} />);

		expect(screen.getByRole('heading', { name: `Máquina ${letter}` })).toBeInTheDocument();
		expect(screen.getByText(`Quantidade de configurações: ${settingsQtd}`)).toBeInTheDocument();
	});
});

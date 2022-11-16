import { render, screen } from '@testing-library/react';

import { Title } from '.';

describe('<Title />', () => {
	it('Should render text correctly', () => {
		const text = "Fake text";

		render(<Title text={text} />);

		expect(screen.getByRole('heading', { name: /Fake text/i })).toBeInTheDocument();
	});
});

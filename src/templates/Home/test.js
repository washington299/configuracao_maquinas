import { screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { HomeTemplate } from '.';

describe('<HomeTemplate />', () => {
	it('Should render correct title and machines', () => {
		globalRender(<HomeTemplate />);

		expect(
			screen.getByRole('heading', { name: /Ficha referencial de preparação e regulagem extrusora tarugos/i })
		).toBeInTheDocument();
		expect(screen.getAllByTestId('Machine card')).toHaveLength(22);
	});
});

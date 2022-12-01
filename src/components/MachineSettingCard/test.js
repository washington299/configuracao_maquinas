import { screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { MachineSettingCard } from '.';

describe('<MachineSettingCard />', () => {
	it('Should render elements correctly', () => {
		const setting = { slug: "Name" };
		const path = "/path";

		globalRender(<MachineSettingCard setting={setting} path={path} />);

		expect(screen.getByText(setting.slug)).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', path);
	});
});

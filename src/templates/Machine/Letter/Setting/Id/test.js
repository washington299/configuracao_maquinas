import { fireEvent, screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { MachineLetterSettingId } from '.';

const push = jest.fn();
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
	query: { letter: 'A', id: '40-ppn' },
	push,
}));

const mutate = jest.fn();
const useAddMachineSettingsData = jest.spyOn(require('services/queries'), 'useAddMachineSettingsData');
useAddMachineSettingsData.mockImplementation(() => ({
	mutate,
}));

const useGetMachineSettingsData = jest.spyOn(require('services/queries'), 'useGetMachineSettingsData');
useGetMachineSettingsData.mockImplementation(() => ({
	isLoading: false,
}));

describe('<MachineLetterSettingId />', () => {
	it('Should redirect Arrow back to correct route', () => {
		globalRender(<MachineLetterSettingId />);

		expect(push).not.toBeCalled();

		fireEvent.click(screen.getByTestId('Arrow back'));

		expect(push).toHaveBeenCalledWith('/machine/A');
	});

	it('Should render correct Title', () => {
		globalRender(<MachineLetterSettingId />);

		expect(screen.getByRole('heading', { name: /Máquina A - 40 PPN/i }))
	});

	it('Should call mutate with correct values when form is submitted', () => {
		globalRender(<MachineLetterSettingId />);

		expect(mutate).not.toBeCalled();

		fireEvent.change(screen.getByLabelText(/Diâmetro externo/i), { target: { value: '40 PPN' } });
		fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));

		expect(mutate).toHaveBeenCalledWith({
			"amperagem_da_rosca": "",
      "diametro": "40 PPN",
      "extrusora": "A",
    	"materialCheck": "",
      "name": "A",
    	"slug": "40 PPN",
			"pressao_do_freio": "",
			"pressao_do_material_na_saida_da_rosca": "",
			"producao": "",
			"temperatura_da_agua": "",
			"velocidade_da_rosca": "",
			"zona1": "",
			"zona2": "",
			"zona3": "",
			"zona4": "",
			"zona5": "",
			"zona6": "",
		});
	});
});

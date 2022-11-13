import { fireEvent, render, screen } from '@testing-library/react';

import { SettingForm } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let query = {};

useRouter.mockImplementation(() => ({
	query,
}));

describe('<SettingForm />', () => {
	afterEach(() => {
		query = {};
	});

	it('Should hide delete button if there is create param on url query', () => {
		query = { create: true };

		render(<SettingForm />);

		expect(screen.queryByRole('button', { name: 'Deletar' })).not.toBeInTheDocument();
	});

	it('Should show delete button if there is create param on url query', () => {
		render(<SettingForm />);

		expect(screen.getByRole('button', { name: 'Deletar' })).toBeInTheDocument();
	});

	it('Should change inputs values correct', () => {
		render(<SettingForm />);

		const diametroInput = screen.getByPlaceholderText(/Diametro/i);
		const zona1Input = screen.getByPlaceholderText(/Zona 1/i);

		fireEvent.change(diametroInput, { target: { value: 10 } });
		fireEvent.change(zona1Input, { target: { value: 'Zona 1 teste' } });

		expect(diametroInput).toHaveValue("10");
		expect(zona1Input).toHaveValue('Zona 1 teste');
	});

	it('Should check checkbox fields correct', () => {
		render(<SettingForm />);

		const PPNCheckbox = screen.getByLabelText(/PPN/i);

		expect(PPNCheckbox).not.toBeChecked();

		fireEvent.click(PPNCheckbox);

		expect(PPNCheckbox).toBeChecked();
	});

	it('Should call handleSubmitSettingForm with correct values when form is submited', () => {
		const handleSubmitSettingFormMock = jest.fn();

		render(<SettingForm handleSubmitSettingForm={handleSubmitSettingFormMock} />);

		const diametroInput = screen.getByPlaceholderText(/Diametro/i);
		const OUTROSCheckbox = screen.getByLabelText(/OUTROS/i);
		const zona1Input = screen.getByPlaceholderText(/Zona 1/i);
		const zona2Input = screen.getByPlaceholderText(/Zona 2/i);
		const zona3Input = screen.getByPlaceholderText(/Zona 3/i);
		const zona4Input = screen.getByPlaceholderText(/Zona 4/i);
		const zona5Input = screen.getByPlaceholderText(/Zona 5/i);
		const zona6Input = screen.getByPlaceholderText(/Zona 6/i);
		const velocidadeDaRosca = screen.getByPlaceholderText(/Velocidade da rosca/i);
		const amperagemDaRosca = screen.getByPlaceholderText(/Amperagem da rosca/i);
		const pressaoDoMaterialNaSaidaDaRosca = screen.getByPlaceholderText(/Pressão do material na saida da rosca/i);
		const pressaoDoFreio = screen.getByPlaceholderText(/Pressão do freio/i);
		const temperaturaDaAgua = screen.getByPlaceholderText(/Temperatura da agua/i);
		const producao = screen.getByPlaceholderText(/Produção/i);

		fireEvent.change(diametroInput, { target: { value: 10 } });
		fireEvent.click(OUTROSCheckbox);
		fireEvent.change(zona1Input, { target: { value: 'Zona 1 teste' } });
		fireEvent.change(zona2Input, { target: { value: 'Zona 2 teste' } });
		fireEvent.change(zona3Input, { target: { value: 'Zona 3 teste' } });
		fireEvent.change(zona4Input, { target: { value: 'Zona 4 teste' } });
		fireEvent.change(zona5Input, { target: { value: 'Zona 5 teste' } });
		fireEvent.change(zona6Input, { target: { value: 'Zona 6 teste' } });
		fireEvent.change(velocidadeDaRosca, { target: { value: 'Velocidade normal' } });
		fireEvent.change(amperagemDaRosca, { target: { value: 'Amperagem normal' } });
		fireEvent.change(pressaoDoMaterialNaSaidaDaRosca, { target: { value: 'Pressão de saida normal' } });
		fireEvent.change(pressaoDoFreio, { target: { value: 'Pressão do freio normal' } });
		fireEvent.change(temperaturaDaAgua, { target: { value: 'Temperatura normal' } });
		fireEvent.change(producao, { target: { value: 'Produção normal' } });


		fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));

		expect(handleSubmitSettingFormMock).toHaveBeenCalledTimes(1);
		expect(handleSubmitSettingFormMock).toHaveBeenCalledWith({
			diametro: "10",
			materialCheck: 'OUTROS',
			zona1: 'Zona 1 teste',
			zona2: 'Zona 2 teste',
			zona3: 'Zona 3 teste',
			zona4: 'Zona 4 teste',
			zona5: 'Zona 5 teste',
			zona6: 'Zona 6 teste',
			velocidade_da_rosca: 'Velocidade normal',
			amperagem_da_rosca: 'Amperagem normal',
			pressao_do_material_na_saida_da_rosca: 'Pressão de saida normal',
			pressao_do_freio: 'Pressão do freio normal',
			temperatura_da_agua: 'Temperatura normal',
			producao: 'Produção normal',
		});
	});
});

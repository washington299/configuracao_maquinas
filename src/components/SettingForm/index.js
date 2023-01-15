import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
	Heading,
	Box,
	VStack,
	HStack,
	Spinner,
	SimpleGrid,
	FormControl,
	FormLabel,
	Input,
	RadioGroup,
	Radio,
	Text,
	Button,
} from '@chakra-ui/react';

import { useGetMachineSettingsData } from 'services/queries';

const initialFormState = {
	diametro: 0,
	materialCheck: '',
	zona1: '',
	zona2: '',
	zona3: '',
	zona4: '',
	zona5: '',
	zona6: '',
	velocidade_da_rosca: '',
	amperagem_da_rosca: '',
	pressao_do_material_na_saida_da_rosca: '',
	pressao_do_freio: '',
	temperatura_da_agua: '',
	producao: '',
};

const formFieldsTextColor = 'red.500';
const formLabelStyles = {
	mb: 0,
	fontSize: ['xs', 'md'],
	fontWeight: "normal",
};

export const SettingForm = ({ handleSubmitSettingForm }) => {
	const router = useRouter();
	const { create, letter, id } = router.query;


	const { isLoading, data } = useGetMachineSettingsData(letter, id, create);

	const [formData, setFormData] = useState(initialFormState);

	const handleInputFormDataChange = (e) => {
		setFormData(previousData => ({ ...previousData, [e.target.name]: e.target.value }));
	};

	useEffect(() => {
		if (data?.data) {
			setFormData({ ...initialFormState, ...data?.data[0] });
		}
	}, [data?.data]);

	return (
		<>
			{isLoading ? (
				<VStack mt={10}>
					<Spinner size="lg" data-testid='spinbutton' />
				</VStack>
			) : (
				<>
					<VStack w="full" spacing={6} mt={6}>
						<FormControl>
							<FormLabel {...formLabelStyles}>Diâmetro externo (mm):</FormLabel>
							<Input
								name="diametro"
								placeholder="Diametro"
								value={formData.diametro}
								onChange={handleInputFormDataChange}
								color={formFieldsTextColor}
							/>
						</FormControl>

						<VStack w="full" alignItems="normal" spacing={0}>
							<Text>Material</Text>
							<Box w="full" border="1px solid" borderColor="gray.300" p={6}>
								<RadioGroup
									value={formData.materialCheck}
									onChange={(value) => setFormData(previousData => ({ ...previousData, materialCheck: value }))}
								>
									<SimpleGrid columns={[3, 4, 5, 6]} spacing={4}>
										<Radio value="PPN" colorScheme="red">PPN</Radio>
										<Radio value="PPP" colorScheme="red">PPP</Radio>
										<Radio value="PPZ" colorScheme="red">PPZ</Radio>
										<Radio value="PEADN" colorScheme="red">PEADN</Radio>
										<Radio value="PEADP" colorScheme="red">PEADP</Radio>
										<Radio value="OUTROS" colorScheme="red">OUTROS</Radio>
									</SimpleGrid>
								</RadioGroup>
							</Box>
						</VStack>

						<Heading fontSize='xl'>Temperaturas (°c)</Heading>

						<SimpleGrid w="full" columns={[1, 2, 3]} spacing={6}>
							<FormControl>
								<FormLabel {...formLabelStyles}>Zona 1</FormLabel>
								<Input
									name="zona1"
									placeholder="Zona 1"
									color={formFieldsTextColor}
									value={formData.zona1}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Zona 2</FormLabel>
								<Input
									name="zona2"
									placeholder="Zona 2"
									color={formFieldsTextColor}
									value={formData.zona2}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Zona 3</FormLabel>
								<Input
									name="zona3"
									placeholder="Zona 3"
									color={formFieldsTextColor}
									value={formData.zona3}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Zona 4</FormLabel>
								<Input
									name="zona4"
									placeholder="Zona 4"
									color={formFieldsTextColor}
									value={formData.zona4}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Zona 5</FormLabel>
								<Input
									name="zona5"
									placeholder="Zona 5"
									color={formFieldsTextColor}
									value={formData.zona5}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Zona 6</FormLabel>
								<Input
									name="zona6"
									placeholder="Zona 6"
									color={formFieldsTextColor}
									value={formData.zona6}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>
						</SimpleGrid>

						<Heading fontSize="xl">Controle de processo</Heading>

						<SimpleGrid w="full" columns={[1, 2]} spacing={6}>
							<FormControl>
								<FormLabel {...formLabelStyles}>Velocidade da rosca  (rpm)</FormLabel>
								<Input
									name="velocidade_da_rosca"
									placeholder="Velocidade da rosca"
									color={formFieldsTextColor}
									value={formData.velocidade_da_rosca}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Amperagem da rosca  (A)</FormLabel>
								<Input
									name="amperagem_da_rosca"
									placeholder="Amperagem da rosca"
									color={formFieldsTextColor}
									value={formData.amperagem_da_rosca}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Pressão do material na saída da rosca  (bar)</FormLabel>
								<Input
									name="pressao_do_material_na_saida_da_rosca"
									placeholder="Pressão do material na saida da rosca"
									color={formFieldsTextColor}
									value={formData.pressao_do_material_na_saida_da_rosca}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Pressão do freio  (bar)</FormLabel>
								<Input
									name="pressao_do_freio"
									placeholder="Pressão do freio"
									color={formFieldsTextColor}
									value={formData.pressao_do_freio}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Temperatura da água  (°c)</FormLabel>
								<Input
									name="temperatura_da_agua"
									placeholder="Temperatura da agua"
									color={formFieldsTextColor}
									value={formData.temperatura_da_agua}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel {...formLabelStyles}>Produção  (kg/hora)</FormLabel>
								<Input
									name="producao"
									placeholder="Produção"
									color={formFieldsTextColor}
									value={formData.producao}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>
						</SimpleGrid>
					</VStack>

					<HStack mt={10} justifyContent="flex-end">
						<Button colorScheme="green" onClick={() => handleSubmitSettingForm(formData)}>
							Salvar
						</Button>
					</HStack>
				</>
			)}
		</>
	);
};

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
							<FormLabel mb={0}>Diâmetro externo (mm):</FormLabel>
							<Input
								name="diametro"
								placeholder="Diametro"
								value={formData.diametro}
								onChange={handleInputFormDataChange}
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
										<Radio value="PPN">PPN</Radio>
										<Radio value="PPP">PPP</Radio>
										<Radio value="PPZ">PPZ</Radio>
										<Radio value="PEADN">PEADN</Radio>
										<Radio value="PEADP">PEADP</Radio>
										<Radio value="OUTROS">OUTROS</Radio>
									</SimpleGrid>
								</RadioGroup>
							</Box>
						</VStack>

						<Heading fontSize="xl">Temperaturas (°c)</Heading>

						<SimpleGrid w="full" columns={[1, 2, 3]} spacing={6}>
							<FormControl>
								<FormLabel mb={0}>Zona 1</FormLabel>
								<Input
									name="zona1"
									placeholder="Zona 1"
									value={formData.zona1}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Zona 2</FormLabel>
								<Input
									name="zona2"
									placeholder="Zona 2"
									value={formData.zona2}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Zona 3</FormLabel>
								<Input
									name="zona3"
									placeholder="Zona 3"
									value={formData.zona3}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Zona 4</FormLabel>
								<Input
									name="zona4"
									placeholder="Zona 4"
									value={formData.zona4}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Zona 5</FormLabel>
								<Input
									name="zona5"
									placeholder="Zona 5"
									value={formData.zona5}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Zona 6</FormLabel>
								<Input
									name="zona6"
									placeholder="Zona 6"
									value={formData.zona6}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>
						</SimpleGrid>

						<Heading fontSize="xl">Controle de processo</Heading>

						<SimpleGrid w="full" columns={[1, 2]} spacing={6}>
							<FormControl>
								<FormLabel mb={0}>Velocidade da rosca  (rpm)</FormLabel>
								<Input
									name="velocidade_da_rosca"
									placeholder="Velocidade da rosca"
									value={formData.velocidade_da_rosca}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Amperagem da rosca  (A)</FormLabel>
								<Input
									name="amperagem_da_rosca"
									placeholder="Amperagem da rosca"
									value={formData.amperagem_da_rosca}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Pressão do material na saída da rosca  (bar)</FormLabel>
								<Input
									name="pressao_do_material_na_saida_da_rosca"
									placeholder="Pressão do material na saida da rosca"
									value={formData.pressao_do_material_na_saida_da_rosca}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Pressão do freio  (bar)</FormLabel>
								<Input
									name="pressao_do_freio"
									placeholder="Pressão do freio"
									value={formData.pressao_do_freio}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Temperatura da água  (°c)</FormLabel>
								<Input
									name="temperatura_da_agua"
									placeholder="Temperatura da agua"
									value={formData.temperatura_da_agua}
									onChange={handleInputFormDataChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mb={0}>Produção  (kg/hora)</FormLabel>
								<Input
									name="producao"
									placeholder="Produção"
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

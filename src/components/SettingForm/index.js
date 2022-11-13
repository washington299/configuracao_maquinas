import { useState } from 'react';
import { useRouter } from 'next/router';
import {
	Heading,
	Box,
	VStack,
	HStack,
	SimpleGrid,
	FormControl,
	FormLabel,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	CheckboxGroup,
	Checkbox,
	Text,
	Button,
	useDisclosure,
} from '@chakra-ui/react';

import { DeleteSettingModal } from 'components/DeleteSettingModal';

export const SettingForm = ({ handleSubmitSettingForm }) => {
	const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

	const [formData, setFormData] = useState({});

	const handleInputFormDataChange = (e) => {
		setFormData(previousData => ({ ...previousData, [e.target.name]: e.target.value }));
	};

	return (
		<>
			<DeleteSettingModal isOpen={isOpen} onClose={onClose} />

			<VStack w="full" spacing={6} mt={6}>
				<FormControl>
					<FormLabel mb={0}>Diâmetro externo (mm):</FormLabel>
					<NumberInput
						min={0}
						name="diametro"
						value={formData.diametro}
						onChange={(value) => setFormData(previousData => ({ ...previousData, diametro: value }))}
					>
						<NumberInputField placeholder="Diametro" />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>

				<VStack w="full" alignItems="normal" spacing={0}>
					<Text>Material</Text>
					<Box w="full" border="1px solid" borderColor="gray.300" p={6}>
						<CheckboxGroup
							value={formData.materialCheck}
							onChange={(value) => setFormData(previousData => ({ ...previousData, materialCheck: value }))}
						>
							<SimpleGrid columns={[3, 4, 5, 6]} spacing={4}>
								<Checkbox value="PPN">PPN</Checkbox>
								<Checkbox value="PPP">PPP</Checkbox>
								<Checkbox value="PPZ">PPZ</Checkbox>
								<Checkbox value="PEADN">PEADN</Checkbox>
								<Checkbox value="PEADP">PEADP</Checkbox>
								<Checkbox value="OUTROS">OUTROS</Checkbox>
							</SimpleGrid>
						</CheckboxGroup>
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
				{!router?.query?.create && (
					<Button colorScheme="red" onClick={onOpen}>Deletar</Button>
				)}
				<Button colorScheme="green" onClick={() => handleSubmitSettingForm(formData)}>
					Salvar
				</Button>
			</HStack>
		</>
	);
};

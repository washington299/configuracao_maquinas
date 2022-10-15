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
} from '@chakra-ui/react';

export const SettingForm = () => {
	return (
		<>
			<VStack w="full" spacing={6} mt={6}>
				<FormControl>
					<FormLabel mb={0}>Diâmetro externo (mm):</FormLabel>
					<NumberInput min={0}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>

				<VStack w="full" alignItems="normal" spacing={0}>
					<Text>Material</Text>
					<Box w="full" border="1px solid" borderColor="gray.300" p={6}>
						<CheckboxGroup>
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
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Zona 2</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Zona 3</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Zona 4</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Zona 5</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Zona 6</FormLabel>
						<Input />
					</FormControl>
				</SimpleGrid>

				<Heading fontSize="xl">Controle de processo</Heading>

				<SimpleGrid w="full" columns={[1, 2]} spacing={6}>
					<FormControl>
						<FormLabel mb={0}>Velocidade da rosca  (rpm)</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Amperagem da rosca  (A)</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Pressão do material na saída da rosca  (bar)</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Pressão do freio  (bar)</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Temperatura da água  (°c)</FormLabel>
						<Input />
					</FormControl>

					<FormControl>
						<FormLabel mb={0}>Produção  (kg/hora)</FormLabel>
						<Input />
					</FormControl>
				</SimpleGrid>
			</VStack>

			<HStack mt={10} justifyContent="flex-end">
				<Button colorScheme="red">Deletar</Button>
				<Button colorScheme="green">Salvar</Button>
			</HStack>
		</>
	);
};

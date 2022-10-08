import { Heading, Container, SimpleGrid } from '@chakra-ui/react';

import { MachineCard } from 'components/MachineCard';

import { machinesList } from 'const/machines';

const Home = () => {
	return (
		<Container py={10}>
			<Heading as="h1" textAlign="center" fontSize={{ base: "xl", lg: "3xl"}} my={6}>
				Ficha referencial de preparação e regulagem extrusora tarugos
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
				{machinesList.map((machineLetter) => (
					<MachineCard key={machineLetter} letter={machineLetter} />
				))}
			</SimpleGrid>
		</Container>
	);
};

export default Home;

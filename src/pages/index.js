import { Container, SimpleGrid } from '@chakra-ui/react';

import { MachineCard } from 'components/MachineCard';
import { Title } from 'components/Title';

import { machinesList } from 'const/machines';

const Home = () => {
	return (
		<Container py={10}>
			<Title text="Ficha referencial de preparação e regulagem extrusora tarugos" />

			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
				{machinesList.map((machineLetter) => (
					<MachineCard key={machineLetter} letter={machineLetter} />
				))}
			</SimpleGrid>
		</Container>
	);
};

export default Home;

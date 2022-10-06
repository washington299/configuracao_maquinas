import { Heading, Container } from '@chakra-ui/react';

import { MachineCard } from 'components/MachineCard';

const Home = () => {
	return (
		<Container>
			<Heading as="h1" textAlign="center" fontSize={{ base: "xl", lg: "3xl"}} my={6}>
				Ficha referencial de preparação e regulagem extrusora tarugos
			</Heading>

			<MachineCard />
		</Container>
		// <Container>
		// 	<Title>Ficha referencial de preparação e regulagem extrusora tarugos</Title>

		// 	{Machines.map(({ id }) => (
		// 		<MachineLinkButton key={id} id={id} />
		// 	))}
		// </Container>
	);
};

export default Home;

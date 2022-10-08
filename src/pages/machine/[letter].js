import { useRouter } from 'next/router';
import { Text, Container, Icon, Heading } from '@chakra-ui/react';
import { ArrowBack } from '@material-ui/icons';

const MachineLetterSettings = () => {
	const router = useRouter();

	console.log(router.query.letter);

	return (
		<Container py={10}>
			<Icon as={ArrowBack} cursor="pointer" onClick={() => router.back()} />

			<Heading as="h1" fontSize="2xl" textAlign="center">
				Máquina {router.query.letter} lista de configurações
			</Heading>
		</Container>
	);
};

export default MachineLetterSettings;

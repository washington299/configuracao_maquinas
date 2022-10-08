import { useRouter } from 'next/router';
import { Container, Icon, Heading } from '@chakra-ui/react';
import { ArrowBack } from '@material-ui/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MachineLetterSettings = () => {
	const router = useRouter();
	const machineLetter = router.query.letter;

	const { data } = useQuery(['machines'], async () => {
		const { data } = await axios({ url: `http://localhost:3000/api/machine/${machineLetter}`, method: 'get' });

		return data;
	});

	console.log(data);

	return (
		<Container py={10}>
			<Icon as={ArrowBack} cursor="pointer" onClick={() => router.back()} />

			<Heading as="h1" fontSize="2xl" textAlign="center">
				Máquina {machineLetter} lista de configurações
			</Heading>
		</Container>
	);
};

export default MachineLetterSettings;

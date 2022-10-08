import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Container, Icon, Heading, Spinner, VStack, HStack, Text, SimpleGrid } from '@chakra-ui/react';
import { ArrowBack, Settings } from '@material-ui/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MachineLetterSettings = () => {
	const router = useRouter();
	const machineLetter = router.query.letter;

	const { data, isLoading } = useQuery(['machine', machineLetter], async () => {
		const { data } = await axios({ url: `http://localhost:3000/api/machine/${machineLetter}`, method: 'get' });

		return data;
	});

	return (
		<Container py={10}>
			<Icon as={ArrowBack} cursor="pointer" onClick={() => router.back()} />

			<Heading as="h1" fontSize="2xl" textAlign="center" mb={10}>
				Máquina {machineLetter} lista de configurações
			</Heading>

			{isLoading ? (
				<VStack mt={10}>
					<Spinner size="lg" />
				</VStack>
			) : (
				<Fragment>
					{data?.data?.length > 0 ? (
						<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
							{data?.data?.map(setting => (
								<HStack key={setting._id}
									alignItems="center"
									boxShadow="base"
									borderRadius="md"
									p={3}
									cursor="pointer"
									_hover={{ bg: 'blackAlpha.50' }}
								>
									<Text>{setting.slug}</Text>
									<Icon as={Settings} w="100px" h="100px" />
								</HStack>
							))}
						</SimpleGrid>
					) : (
						<Text textAlign="center">Essa máquina ainda não possui configurações.</Text>
					)}
				</Fragment>
			)}
		</Container>
	);
};

export default MachineLetterSettings;

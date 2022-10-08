import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Container, Icon, Heading, Spinner, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { ArrowBack } from '@material-ui/icons';
import { useQuery } from '@tanstack/react-query';

import { getMachineSettings } from 'services/api';

import { MachineSettingCard } from 'components/MachineSettingCard';

const MachineLetterSettings = () => {
	const router = useRouter();
	const machineLetter = router.query.letter;

	const { data, isLoading } = useQuery(['machine', machineLetter], async () => getMachineSettings(machineLetter));

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
								<MachineSettingCard key={setting._id} name={setting.slug} />
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

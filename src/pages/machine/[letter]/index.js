import { Fragment } from 'react';
import { useRouter } from 'next/router';
import {
	Container,
	Icon,
	Heading,
	Spinner,
	VStack,
	Text,
	SimpleGrid,
	Button,
	useDisclosure
} from '@chakra-ui/react';
import { ArrowBack, Add } from '@material-ui/icons';

import { useGetMachineSettings } from 'services/queries';

import { MachineSettingCard } from 'components/MachineSettingCard';
import { AddSettingsModal } from 'components/AddSettingsModal';

const MachineLetterSettings = () => {
	const router = useRouter();
	const machineLetter = router.query.letter;

	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isLoading } = useGetMachineSettings(machineLetter);

	return (
		<Container py={10}>
			<Icon as={ArrowBack} cursor="pointer" onClick={() => router.back()} />

			<VStack mb={10} spacing={4}>
				<Heading as="h1" fontSize="2xl" textAlign="center">
					Máquina {machineLetter} lista de configurações
				</Heading>

				<Button
					colorScheme="blue"
					rightIcon={<Add />}
					onClick={onOpen}
				>
					Criar nova configuração
				</Button>
				<AddSettingsModal isOpen={isOpen} onClose={onClose} />
			</VStack>

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

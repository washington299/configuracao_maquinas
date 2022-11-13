import { useRouter } from 'next/router';
import { Container, Icon, Heading, useToast } from '@chakra-ui/react';
import { ArrowBack } from '@material-ui/icons';

import { formatSlugToString } from 'helpers/parsers';

import { useAddMachineSettingsData } from 'services/queries';

import { SettingForm } from 'components/SettingForm';

const SettingPage = () => {
	const router = useRouter();

	const machineLetter = router.query.letter;
	const settingId = formatSlugToString(router?.query?.id || "");

	const toast = useToast();

	const { mutate, isSuccess } = useAddMachineSettingsData(router.query.create);

	const handleSubmitSettingForm = (values) => {
		values.extrusora = machineLetter;
		values.name = machineLetter;
		values.slug = settingId.toUpperCase();

		mutate(values);
	};

	const handleSuccess = () => {
		toast({
			title: "Configuração salva",
			status: "success",
			duration: 5000,
			isClosable: true,
		});

		router.push(`/machine/${machineLetter}`);
	};

	return (
		<Container py={10}>
			{isSuccess && handleSuccess()}

			<Icon as={ArrowBack} cursor="pointer" onClick={() => router.back()} />

			<Heading textAlign="center" fontSize="2xl">
				Máquina {machineLetter} - {settingId.toUpperCase()}
			</Heading>

			<SettingForm handleSubmitSettingForm={handleSubmitSettingForm} />
		</Container>
	);
};

export default SettingPage;

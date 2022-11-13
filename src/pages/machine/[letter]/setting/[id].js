import { useRouter } from 'next/router';
import { Container, Icon, Heading, useToast } from '@chakra-ui/react';
import { ArrowBack } from '@material-ui/icons';
import { useMutation } from '@tanstack/react-query';

import { formatSlugToString } from 'helpers/parsers';

import { createMachineSettings } from 'services/queries';

import { SettingForm } from 'components/SettingForm';

const SettingPage = () => {
	const router = useRouter();

	const machineLetter = router.query.letter;
	const settingId = formatSlugToString(router?.query?.id || "");

	const toast = useToast();

	const { mutate } = useMutation((newSetting) =>
		createMachineSettings(newSetting), { onSuccess: () => {
			toast({
				title: "Configuração criada",
				status: "success",
				duration: 5000,
				isClosable: true,
			});

			router.push(`/machine/${machineLetter}`);
		}});

	const handleSubmitSettingForm = (values) => {
		values.extrusora = machineLetter;
		values.name = machineLetter;
		values.slug = settingId.toUpperCase();

		mutate(values);
	};

	return (
		<Container py={10}>
			<Icon as={ArrowBack} cursor="pointer" onClick={() => router.back()} />

			<Heading textAlign="center" fontSize="2xl">
				Máquina {machineLetter} - {settingId.toUpperCase()}
			</Heading>

			<SettingForm handleSubmitSettingForm={handleSubmitSettingForm} />
		</Container>
	);
};

export default SettingPage;

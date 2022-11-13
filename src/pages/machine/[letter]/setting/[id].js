import { useRouter } from 'next/router';
import { Container, Icon, Heading } from '@chakra-ui/react';
import { ArrowBack } from '@material-ui/icons';

import { formatSlugToString } from 'helpers/parsers';

import { SettingForm } from 'components/SettingForm';

const SettingPage = () => {
	const router = useRouter();

	const machineLetter = router.query.letter;
	const settingId = formatSlugToString(router?.query?.id || "");

	const handleSubmitSettingForm = (values) => {
		values.extrusora = machineLetter;
		values.name = machineLetter;
		values.slug = settingId;

		console.log(values);
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

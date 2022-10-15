import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';

import { formatSlugToString } from 'helpers/parsers';

import { SettingForm } from 'components/SettingForm';

const SettingPage = () => {
	const router = useRouter();

	const machineLetter = router.query.letter;
	const settingId = formatSlugToString(router?.query?.id || "");

	return (
		<Container py={10}>
			<Heading textAlign="center" fontSize="2xl">
				Máquina {machineLetter} - {settingId.toUpperCase()}
			</Heading>

			<SettingForm />
		</Container>
	);
};

export default SettingPage;

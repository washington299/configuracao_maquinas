import { Heading, VStack, Text, Icon } from '@chakra-ui/react';

import { RobotIcon } from 'Icons/RobotIcon';

export const MachineCard = ({ letter, settingsQtd }) => {
	return (
		<VStack
			boxShadow="base"
			borderRadius="md"
			p={3}
			cursor="pointer"
			_hover={{ bg: 'blackAlpha.50' }}
		>
			<Icon width="full" height="150" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
				<RobotIcon />
			</Icon>
			<Heading as="h2" fontSize="2xl">Máquina {letter}</Heading>
			<Text>Quantidade de configurações: {settingsQtd}</Text>
		</VStack>
	);
};

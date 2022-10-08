import { HStack, Text, Icon } from '@chakra-ui/react';
import { Settings } from '@material-ui/icons';

export const MachineSettingCard = ({ name }) => {
	return (
		<HStack
			alignItems="center"
			p={3}
			boxShadow="base"
			borderRadius="md"
			cursor="pointer"
			_hover={{ bg: 'blackAlpha.50' }}
		>
			<Text>{name}</Text>
			<Icon as={Settings} w="100px" h="100px" />
		</HStack>
	);
};

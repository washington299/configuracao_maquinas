import NextLink from 'next/link';
import { HStack, Text, Icon, LinkBox, LinkOverlay, Button, useDisclosure } from '@chakra-ui/react';
import { Settings, Delete } from '@material-ui/icons';

import { DeleteSettingModal } from 'components/DeleteSettingModal';

export const MachineSettingCard = ({ setting, path }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<DeleteSettingModal isOpen={isOpen} onClose={onClose} settingId={setting._id} />

			<LinkBox>
				<HStack
					alignItems="center"
					justifyContent="space-between"
					p={3}
					boxShadow="base"
					borderRadius="md"
					cursor="pointer"
					_hover={{ bg: 'blackAlpha.50' }}
				>
					<NextLink href={path} passHref>
						<LinkOverlay flex={1} display="flex" alignItems="center">
							<Text as="span">{setting.slug}</Text>
							<Icon as={Settings} ml={1} />
						</LinkOverlay>
					</NextLink>

					<Button minW="fit-content" h="fit-content" bg="none" p={0} onClick={onOpen}>
						<Icon as={Delete} color="red" />
					</Button>
				</HStack>
			</LinkBox>
		</>
	);
};

import {
	Text,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
} from '@chakra-ui/react';

export const DeleteSettingModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader>Deletar configuração</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>Tem certeza que deseja excluir essa configuração?</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose} mr={3}>Cancelar</Button>
					<Button colorScheme="red">Deletar</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

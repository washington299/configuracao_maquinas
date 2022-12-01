import { useEffect } from 'react';
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
	useToast,
} from '@chakra-ui/react';

import { useDeleteMachineSettings } from 'services/queries';

export const DeleteSettingModal = ({ isOpen, onClose, settingId }) => {
	const toast = useToast();

	const { mutate, isSuccess } = useDeleteMachineSettings();

	useEffect(() => {
		if (isSuccess) {
			toast({
				title: "Configuração deletada",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
			onClose();
		}
	}, [isSuccess]);

	return (
		<>
			{/* {isSuccess && handleSuccess} */}
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
						<Button colorScheme="red" onClick={() => mutate({ _id: settingId })}>
							Deletar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

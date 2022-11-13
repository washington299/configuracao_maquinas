import { useRouter } from 'next/router';
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

export const DeleteSettingModal = ({ isOpen, onClose }) => {
	const toast = useToast();
	const router = useRouter();

	const { letter, id } = router.query;

	const { mutate, isSuccess } = useDeleteMachineSettings();

	const handleSuccess = () => {
		toast({
			title: "Configuração deletada",
			status: "error",
			duration: 5000,
			isClosable: true,
		});

		router.push(`/machine/${letter}`);
	};

	return (
		<>
			{isSuccess && handleSuccess()}
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
						<Button colorScheme="red" onClick={() => mutate({ name: letter, slug: id.toUpperCase() })}>
							Deletar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

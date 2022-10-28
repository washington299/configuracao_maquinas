import { useState } from 'react';
import { useRouter } from 'next/router';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
} from '@chakra-ui/react';

import { createSlugBasedOnString } from 'helpers/parsers';

export const AddSettingsModal = ({ isOpen, onClose }) => {
	const [name, setName] = useState('');
	const [error, setError] = useState(false);

	const router = useRouter();
	const machineLetter = router.query.letter;

	const createSetting = () => {
		if (!name) {
			setError(true);
			return;
		}

		onClose();
		router.push(`/machine/${machineLetter}/setting/${createSlugBasedOnString(name)}?create=true`);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader>Criar configuração</ModalHeader>
				<ModalCloseButton />

				<ModalBody>
					<FormControl isInvalid={error}>
						<FormLabel mb={1}>Nome da configuração:</FormLabel>
						<Input
							type="text"
							placeholder="Digite um nome"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{error && <FormErrorMessage mt={0}>Nome é obrigatório</FormErrorMessage>}
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="green" onClick={createSetting}>Criar</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

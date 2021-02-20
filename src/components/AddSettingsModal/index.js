import React, { useState } from 'react';
import { Settings, Close } from '@material-ui/icons';

import { Container, CreateButton, ModalBox, ModalInput } from './styles';

const AddSettingsModal = ({ setSettingsModal, folders, setFolders }) => {
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');

	const createConfig = () => {
		if (!title) {
			setError('Preencha o campo de nome da configuração!');
			return;
		}
		if (title.includes('-')) {
			setError('Por favor não usar o simbolo de: -');
			return;
		}

		setFolders(folders.concat({ id: folders.length + 1, title }));
		setSettingsModal(false);
	};

	return (
		<Container>
			<ModalBox>
				<div className="close-button">
					<Close onClick={() => setSettingsModal(false)} />
				</div>
				<h1>
					Nome da configuração
					<Settings />
				</h1>
				<ModalInput
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Digite um nome para configuração..."
				/>
					{error && <span>{error}</span>}
				<CreateButton onClick={createConfig}>Criar</CreateButton>
			</ModalBox>
		</Container>
	);
};

export default AddSettingsModal;

import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Add } from '@material-ui/icons';

import AddSettingsModal from '../../components/AddSettingsModal';

import { Title, Line } from '../../styles/globalElements';
import { Container, CreateSettingButton } from './styles';

const Machine = () => {
	const { query } = useRouter();
	const { id } = query;

	const [folders, setFolders] = useState([]);
	const [settingsModal, setSettingsModal] = useState(false);

	return (
		<Container>
			{settingsModal && <AddSettingsModal setSettingsModal={setSettingsModal} />}
			<Title>Máquina {id}</Title>

			<CreateSettingButton onClick={() => setSettingsModal(true)}>
				Criar nova configuração
				<Add />
			</CreateSettingButton>

			<Line />

			<h2>Configurações</h2>

			{folders.length === 0 && <span>Nenhuma configuração encontrada.</span>}
		</Container>
	);
}

export default Machine;

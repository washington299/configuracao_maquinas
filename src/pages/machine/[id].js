import { useState } from 'react';
import { useRouter } from 'next/router'
import { Add, ArrowBack } from '@material-ui/icons';

import AddSettingsModal from '../../components/AddSettingsModal';

import { Title, Line } from '../../styles/globalElements';
import { Container, CreateSettingButton } from './styles';

const Machine = () => {
	const { query, push } = useRouter();
	const { id } = query;

	const [folders, setFolders] = useState([]);
	const [settingsModal, setSettingsModal] = useState(false);

	return (
		<Container>
			<ArrowBack
				style={{ position: 'absolute', left: 10, top: 15 }}
				onClick={() => push('/')}
			/>
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

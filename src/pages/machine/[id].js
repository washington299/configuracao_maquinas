import { useState } from 'react';
import { useRouter } from 'next/router'
import { Add, ArrowBack, Settings } from '@material-ui/icons';

import { createSlugBasedOnString } from '../../helpers/parsers';

import AddSettingsModal from '../../components/AddSettingsModal';

import { Title, Line } from '../../styles/globalElements';
import { Container, CreateSettingButton, Folder } from './styles';

const Machine = () => {
	const { query, push } = useRouter();
	const { id } = query;

	const [folders, setFolders] = useState([]);
	const [settingsModal, setSettingsModal] = useState(false);

	const handleClick = (title) => {
		const slug = createSlugBasedOnString(title);
		push(`/machine/settings/${slug}`);
	};

	return (
		<Container>
			<ArrowBack
				style={{ position: 'absolute', left: 10, top: 15 }}
				onClick={() => push('/')}
			/>
			{settingsModal &&
				<AddSettingsModal setSettingsModal={setSettingsModal} folders={folders} setFolders={setFolders} />
			}
			<Title>Máquina {id}</Title>

			<CreateSettingButton onClick={() => setSettingsModal(true)}>
				Criar nova configuração
				<Add />
			</CreateSettingButton>

			<Line />

			<h2>Configurações</h2>

			{folders.map(({ id, title }) => (
				<Folder key={id} onClick={handleClick(title)}>
					{title}
					<Settings />
				</Folder>
			))}

			{folders.length === 0 && <span>Nenhuma configuração encontrada.</span>}
		</Container>
	);
}

export default Machine;

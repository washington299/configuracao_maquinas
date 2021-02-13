import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Add } from '@material-ui/icons';

import { Title, Line } from '../../styles/globalElements';
import { Container, CreateSettingButton } from './styles';

const Machine = () => {
	const { query } = useRouter();
	const { id } = query;

	const [folders, setFolders] = useState([]);

	return (
		<Container>
			<Title>Máquina {id}</Title>

			<CreateSettingButton>
				Criar nova configuração
				<Add />
			</CreateSettingButton>

			<Line />

			<h2>Configurações</h2>

			{folders.length === 0 && <span>Nenhuma configuração encontrada.</span>}

			<Link href={`/machine/${id}/settings/`}>
					<a>Machine {id}</a>
			</Link>
		</Container>
	);
}

export default Machine;

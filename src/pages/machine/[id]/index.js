import { useState } from 'react';
import { useRouter } from 'next/router';
import { Add, ArrowBack, Settings } from '@material-ui/icons';

import Machines from '../../../models/machine';
import dbConnection from '../../../services/dbConnection';
import { createSlugBasedOnString } from '../../../helpers/parsers';

import AddSettingsModal from '../../../components/AddSettingsModal';

import { Title, Line } from '../../../styles/globalElements';
import { Container, CreateSettingButton, Folder } from '../../../styles/machine/styles';

const Machine = ({ machineSettings }) => {
	const router = useRouter();
	const { id } = router.query;

	const [folders, setFolders] = useState(machineSettings);
	const [settingsModal, setSettingsModal] = useState(false);

	const handleClick = title => {
		const slug = createSlugBasedOnString(title);
		router.push(`/machine/${id}/settings/edit/${slug}`);
	};

	return (
		<Container>
			<ArrowBack
				style={{ position: 'absolute', left: 10, top: 15 }}
				onClick={() => router.back()}
			/>
			{settingsModal && (
				<AddSettingsModal
					id={id}
					setSettingsModal={setSettingsModal}
					folders={folders}
					setFolders={setFolders}
				/>
			)}
			<Title>Máquina {id}</Title>

			<CreateSettingButton onClick={() => setSettingsModal(true)}>
				Criar nova configuração
				<Add />
			</CreateSettingButton>

			<Line />

			<h2>Configurações</h2>

			{folders.map(({ _id, slug }) => {
				return (
					<Folder key={_id} onClick={() => handleClick(slug)}>
						{slug}
						<Settings />
					</Folder>
				);
			})}

			{folders.length === 0 && <span>Nenhuma configuração encontrada.</span>}
		</Container>
	);
};

export default Machine;

export const getServerSideProps = async ctx => {
	await dbConnection();

	const res = await Machines.find({ name: ctx.params.id });
	let settings = res.map(config => config.toObject());
	settings = JSON.stringify(settings);
	settings = JSON.parse(settings);

	return {
		props: {
			machineSettings: settings,
		},
	};
};

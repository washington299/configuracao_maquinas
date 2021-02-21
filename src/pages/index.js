import MachineLinkButton from '../components/MachineLinkButton';

import { Machines } from '../models/machines';

import { Title } from '../styles/globalElements';
import Container from '../styles';

const Home = () => {
	return (
		<Container>
			<Title>Ficha referencial de preparação e regulagem extrusora tarugos</Title>

			{Machines.map(({ id }) => (
				<MachineLinkButton key={id} id={id} />
			))}
		</Container>
	);
};

export default Home;

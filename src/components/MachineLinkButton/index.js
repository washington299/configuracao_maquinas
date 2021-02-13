import Link from 'next/link';

import { ReactComponent as Robot } from '../../../public/robo.svg';

import { MachineLink } from './styles';

const MachineLinkButton = ({ id }) => {
    return (
      <Link href={`/machine/${id}`}>
        <MachineLink>
          <a>Configurações da maquina {id}</a>
          <Robot />
        </MachineLink>
      </Link>
    )
};

export default MachineLinkButton;

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowBack } from '@material-ui/icons';

import { formatSlugToString } from '../../../helpers/parsers';

import { Title, Label, Input, SmallText } from '../../../styles/globalElements';
import Container, {
	Extrusora,
	Diametro,
	Material,
	Temperatura,
	Controle,
	ZonaLabel,
	ZonaInput,
	ControleLabel,
	ControleInput,
	SaveButton,
} from './styles';

const Machine = () => {
	const { query, push } = useRouter();
	const { slug } = query;

	const [state, setState] = useState({
		extrusora: '',
		diametro: '',
		materialCheck: '',
		zona1: '',
		zona2: '',
		zona3: '',
		zona4: '',
		zona5: '',
		zona6: '',
		velocidade_da_rosca: '',
		amperagem_da_rosca: '',
		pressao_do_material: '',
		pressao_do_freio: '',
		temperatura_da_agua: '',
		producao: '',
	});

	const handleClick = async () => {
		const {
			amperagem_da_rosca,
			diametro,
			extrusora,
			materialCheck,
			pressao_do_freio,
			pressao_do_material,
			producao,
			temperatura_da_agua,
			velocidade_da_rosca,
			zona1,
			zona2,
			zona3,
			zona4,
			zona5,
			zona6,
		} = state;
	};

	return (
		<Container>
			<ArrowBack style={{ position: 'absolute', left: 10, top: 15 }} onClick={() => push('/')} />
			<Title>{formatSlugToString(slug)}</Title>
			<Extrusora>
				<Label htmlFor="extrusora_n">Extrusora nº:</Label>
				<Input
					type="number"
					id="extrusora_n"
					value={state.extrusora}
					onChange={e => setState({ ...state, extrusora: e.target.value })}
				/>
			</Extrusora>

			<hr />

			<Diametro>
				<Label htmlFor="diametro_externo">
					Diâmetro externo <SmallText>(mm)</SmallText>:
				</Label>
				<br />
				<Input
					type="number"
					id="diametro_externo"
					value={state.diametro}
					onChange={e => setState({ ...state, diametro: e.target.value })}
				/>
			</Diametro>
			<div>
				<Label>Material:</Label>

				<br />

				<Material className="material__container">
					<div className="material__type">
						<Input
							type="checkbox"
							checked={state.materialCheck === 'PPN'}
							id="PPN"
							name="ppn"
							value="PPN"
							onChange={() =>
								setState({ ...state, materialCheck: state.materialCheck === 'PPN' ? '' : 'PPN' })
							}
						/>
						<Label htmlFor="PPN">PPN</Label>
					</div>
					<div className="material__type">
						<Input
							type="checkbox"
							checked={state.materialCheck === 'PPP'}
							id="PPP"
							name="ppp"
							value="PPP"
							onChange={() =>
								setState({ ...state, materialCheck: state.materialCheck === 'PPP' ? '' : 'PPP' })
							}
						/>
						<Label htmlFor="PPP">PPP</Label>
					</div>
					<div className="material__type">
						<Input
							type="checkbox"
							checked={state.materialCheck === 'PPZ'}
							id="PPZ"
							name="ppz"
							value="PPZ"
							onChange={() =>
								setState({ ...state, materialCheck: state.materialCheck === 'PPZ' ? '' : 'PPZ' })
							}
						/>
						<Label htmlFor="PPZ">PPZ</Label>
					</div>
					<div className="material__type">
						<Input
							type="checkbox"
							checked={state.materialCheck === 'PEADN'}
							id="PEADN"
							name="peadn"
							value="PEADN"
							onChange={() =>
								setState({
									...state,
									materialCheck: state.materialCheck === 'PEADN' ? '' : 'PEADN',
								})
							}
						/>
						<Label htmlFor="PEADN">PEADN</Label>
					</div>
					<div className="material__type">
						<Input
							type="checkbox"
							checked={state.materialCheck === 'PEADP'}
							id="PEADP"
							name="peadp"
							value="PEADP"
							onChange={() =>
								setState({
									...state,
									materialCheck: state.materialCheck === 'PEADP' ? '' : 'PEADP',
								})
							}
						/>
						<Label htmlFor="PEADP">PEADP</Label>
					</div>
					<div className="material__type">
						<Input
							type="checkbox"
							checked={state.materialCheck === 'OUTROS'}
							d="OUTROS"
							name="outros"
							value="OUTROS"
							onChange={() =>
								setState({
									...state,
									materialCheck: state.materialCheck === 'OUTROS' ? '' : 'OUTROS',
								})
							}
						/>
						<Label htmlFor="OUTROS">OUTROS</Label>
					</div>
				</Material>
			</div>

			<hr />

			<Temperatura>
				<Label>
					Temperaturas <SmallText>(°c)</SmallText>
				</Label>
				<br />
				<br />
				<div className="zona">
					<ZonaLabel htmlFor="zona-1">zona-1</ZonaLabel>
					<ZonaInput
						type="text"
						id="zona-1"
						value={state.zona1}
						onChange={e => setState({ ...state, zona1: e.target.value })}
					/>
				</div>
				<div className="zona">
					<ZonaLabel htmlFor="zona-2">zona-2</ZonaLabel>
					<ZonaInput
						type="text"
						id="zona-2"
						value={state.zona2}
						onChange={e => setState({ ...state, zona2: e.target.value })}
					/>
				</div>
				<div className="zona">
					<ZonaLabel htmlFor="zona-3">zona-3</ZonaLabel>
					<ZonaInput
						type="text"
						id="zona-3"
						value={state.zona3}
						onChange={e => setState({ ...state, zona3: e.target.value })}
					/>
				</div>
				<div className="zona">
					<ZonaLabel htmlFor="zona-4">zona-4</ZonaLabel>
					<ZonaInput
						type="text"
						id="zona-4"
						value={state.zona4}
						onChange={e => setState({ ...state, zona4: e.target.value })}
					/>
				</div>
				<div className="zona">
					<ZonaLabel htmlFor="zona-5">zona-5</ZonaLabel>
					<ZonaInput
						type="text"
						id="zona-5"
						value={state.zona5}
						onChange={e => setState({ ...state, zona5: e.target.value })}
					/>
				</div>
				<div className="zona">
					<ZonaLabel htmlFor="zona-6">zona-6</ZonaLabel>
					<ZonaInput
						type="text"
						id="zona-6"
						value={state.zona6}
						onChange={e => setState({ ...state, zona6: e.target.value })}
					/>
				</div>
			</Temperatura>

			<hr />

			<Controle>
				<Label>Controle de processo</Label>

				<br />
				<br />

				<div className="controle">
					<ControleLabel htmlFor="velocidade_da_rosca">
						velocidade da rosca &nbsp;<SmallText>(rpm)</SmallText>
					</ControleLabel>
					<ControleInput
						type="text"
						id="velocidade_da_rosca"
						value={state.velocidade_da_rosca}
						onChange={e => setState({ ...state, velocidade_da_rosca: e.target.value })}
					/>
				</div>
				<div className="controle">
					<ControleLabel htmlFor="amperagem_da_rosca">
						amperagem da rosca &nbsp;<SmallText>(A)</SmallText>
					</ControleLabel>
					<ControleInput
						type="text"
						id="amperagem_da_rosca"
						value={state.amperagem_da_rosca}
						onChange={e => setState({ ...state, amperagem_da_rosca: e.target.value })}
					/>
				</div>
				<div className="controle">
					<ControleLabel htmlFor="pressao_do_material">
						pressão do material na saída da rosca &nbsp;<SmallText>(bar)</SmallText>
					</ControleLabel>
					<ControleInput
						type="text"
						id="pressao_do_material"
						value={state.pressao_do_material}
						onChange={e => setState({ ...state, pressao_do_material: e.target.value })}
					/>
				</div>
				<div className="controle">
					<ControleLabel htmlFor="pressao_do_freio">
						pressão do freio &nbsp;<SmallText>(bar)</SmallText>
					</ControleLabel>
					<ControleInput
						type="text"
						id="pressao_do_freio"
						value={state.pressao_do_freio}
						onChange={e => setState({ ...state, pressao_do_freio: e.target.value })}
					/>
				</div>
				<div className="controle">
					<ControleLabel htmlFor="temperatura_da_agua">
						temperatura da água &nbsp;<SmallText>(°c)</SmallText>
					</ControleLabel>
					<ControleInput
						type="text"
						id="temperatura_da_agua"
						value={state.temperatura_da_agua}
						onChange={e => setState({ ...state, temperatura_da_agua: e.target.value })}
					/>
				</div>
				<div className="controle">
					<ControleLabel htmlFor="producao">
						produção &nbsp;<SmallText>(kg/hora)</SmallText>
					</ControleLabel>
					<ControleInput
						type="text"
						id="producao"
						value={state.producao}
						onChange={e => setState({ ...state, producao: e.target.value })}
					/>
				</div>
			</Controle>

			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Link href="/">
					<SaveButton onClick={handleClick}>Salvar</SaveButton>
				</Link>
			</div>
		</Container>
	);
};

export default Machine;

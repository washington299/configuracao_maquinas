import styled from 'styled-components';

import { Label, Button } from '../../../styles/globalElements';

export default styled.div`
	padding: 20px;
`;

export const Extrusora = styled.header`
	margin-top: 15px;
	margin-bottom: 25px;
`;

export const Diametro = styled.section`
	margin-top: 25px;
	margin-bottom: 15px;
`;

export const Material = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20px;
	border: 1px solid #aaa;
	margin-bottom: 25px;

	.material__type {
		width: 33%;
		margin: 5px;
	}
`;

export const Temperatura = styled.section`
	margin: 25px 0;
	text-align: center;

	.zona {
		display: flex;
		align-items: center;
		border: 1px solid #aaa;
	}
	.zona:first-child:not() {
		border-top: none;
	}
`;

export const ZonaLabel = styled(Label)`
	width: 50%;
	padding: 10px 0;
	border-right: 1px solid #aaa;
`;

export const ZonaInput = styled.input`
	width: 50%;
	padding: 0 10px;
	border: none;
	outline: none;
	text-align: center;
`;

export const Controle = styled.section`
	margin: 25px 0;
	text-align: center;

	.controle {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 70px;
		border: 1px solid #aaa;
	}
`;

export const ControleLabel = styled(Label)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50%;
	border-bottom: 1px solid #aaa;
	font-size: 11px;
`;

export const ControleInput = styled.input`
	height: 50%;
	padding: 0 20px;
	border: none;
	outline: none;
	text-align: center;
`;

export const SaveButton = styled(Button)`
	color: #ffffff;
	background-color: #28a745;
`;

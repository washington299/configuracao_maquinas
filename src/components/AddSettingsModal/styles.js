import styled from 'styled-components';
import { Button, Input } from '../../styles/globalElements';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;

	.close-button {
		width: 100%;
		margin-top: -10px;
		margin-right: -10px;
		text-align: end;
		cursor: pointer;
	}

	span {
		width: 100%;
		text-align: start;
		font-size: 12px;
		color: red;
	}
`;

export const ModalBox = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: #fff;

	svg {
		margin-left: 5px;
		vertical-align: middle;
		font-size: 26px;
	}
`;

export const ModalInput = styled(Input)`
	width: 100%;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	border-radius: 0;
	margin-bottom: 5px;
	font-size: 14px;
`;

export const CreateButton = styled(Button)`
	align-self: flex-end;
	margin-top: 15px;
	color: #ffffff;
	background-color: #28a745;
`;

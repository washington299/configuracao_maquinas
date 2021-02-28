import styled from 'styled-components';

import { Button } from '../globalElements';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CreateSettingButton = styled(Button)`
	width: 200px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-left: 0;
	margin-bottom: 20px;
	padding: 5px 10px;
	background-color: #eee;

	svg {
		font-size: 24px;
	}
`;

export const Folder = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	margin-bottom: 30px;
	padding: 10px;
	box-shadow: 0px 3px 10px #00000029;
	word-break: break-all;
	cursor: pointer;

	svg {
		vertical-align: middle;
		margin-left: 5px;
	}
`;

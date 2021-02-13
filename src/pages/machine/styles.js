import styled from 'styled-components';

import { Button } from '../../styles/globalElements';

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
	background-color: #ccc;

	svg {
		font-size: 24px;
	}
`;

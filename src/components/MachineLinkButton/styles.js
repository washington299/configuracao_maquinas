import styled from 'styled-components';

export const MachineLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    background-color: #fff;
  }

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
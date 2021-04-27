 
import styled from 'styled-components';

const SButton = styled.button`
  padding: 15px;
  width: 100%;
  background-color: #4361ee;
  transition: 650ms;
  border: none;
  outline: none;
  font-family: arial;
  font-weight: bold;
  color: #ffff;
  border-radius: 8px;
  text-align: center;
  margin: 2% 0;
  &:hover {
    filter: grayscale(40%);
  }
`;

export default SButton;

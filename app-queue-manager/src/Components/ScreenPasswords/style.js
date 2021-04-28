import styled from 'styled-components';

export const BoxContainer = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  width: 560px;
  heigth: 100vh;
  border: 5px inset;
  border-radius: 15px;
  background-color: #333533;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const BoxPassword = styled.div`
  margin: 20px 0;
  font-size: 8pt;
  color: #72ce27;
  padding: 7px;
`;
export const Title = styled.h2`
  display: flex;
  font-size: 10pt;
  color: #72ce27;
`;
export const SubTitle = styled.h2`
  font-size: 8pt;
  color: #adb5bd;
  padding: 7px
`;
export const QueueDetails = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  background-color: #333533;
  border: 5px inset;
  align-items: center;
  border-radius: 8px;
`;
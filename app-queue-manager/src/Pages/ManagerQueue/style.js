import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d7e3fc;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const ButtonStyle = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
  max-width: 500px;
`;
export const Status = styled.div`
  heigth: 100%;
  margin-top: 20%;
  flex-direction: column;
  font-weight: bold;
  font-size: 40pt;
  color: #6665DD;
`;
export const BoxPassword = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 20pt;
  width: 30%;
  border-radius: 8px;
  color: #72ce27;
  padding: 8px;
  border: 5px inset;
  background-color: #333533;
`;
export const SubTitle = styled.h1`
  margin: 20px 0;
  font-size: 20pt;
  color: #333533;
  padding: 8px;
`;
export const BoxQueue = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 40%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
`;
export const Title = styled.h1`
  margin: 2%;
  display: flex;
  justify-content: center;
  font-size: 30pt;
  color: #6665DD;
`;
export const SubTitleScreen = styled.h2`
  margin-top: 5%;
  font-size: 20pt;
  color: #333533;
`;
export const screen = styled.div`
  height: 100vh;
  margin-top: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;
export const ContainerButtons = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`;
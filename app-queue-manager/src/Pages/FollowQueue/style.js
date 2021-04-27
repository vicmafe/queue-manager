import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d7e3fc;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 70px;
  font-size: 40pt;
  color: #1dab45;
  border: 5px solid #1dab45;
  padding: 7px
`;
export const SubTitle = styled.h1`
  margin: 20px 0;
  font-size: 30pt;
  color: #6665DD;
  padding: 7px
`;
export const BoxType = styled.div`
  margin: 20px 0;
  font-size: 30pt;
  color: #5a4fcf;
  padding: 7px;
  background-color: #34e065;
`;
export const BoxPassword = styled.div`
  margin: 20px 0;
  font-size: 30pt;
  color: #5a4fcf;
  padding: 7px;
  background-color: #34e065;
`;
export const BoxNav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
export const icon = styled.div`
  width: 25px;
  filter: invert(41%) sepia(60%) saturate(881%) hue-rotate(207deg) brightness(90%) contrast(92%);
`;
export const BoxQueue = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35%;
  flex-direction: row;
  justify-content: space-between;
`;
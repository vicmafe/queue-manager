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
  font-size: 60pt;
  color: #1dab45;
  padding: 7px
`;
export const SubTitle = styled.h1`
  margin: 20px 0;
  font-size: 30pt;
  color: #333533;
  padding: 8px
`;
export const BoxType = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 45%;
  font-size: 30pt;
  border-radius: 8px;
  color: #333533;
  padding: 8px;
  border: 5px solid #1dab45;
`;
export const BoxPassword = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 30pt;
  width: 45%;
  border-radius: 8px;
  color: #333533;
  padding: 8px;
  border: 5px solid #1dab45;
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
export const screen = styled.div`
  height: 100vh;
  margin-top: 8%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;
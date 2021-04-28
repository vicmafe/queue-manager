import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button';
import * as S from './style';
import TopBar from '../../Components/TopBar';

const GetPassword = () => {
  const history = useHistory();
  return (
    <S.Container>
      <TopBar />
      <S.Title>
        Olá,
        seja bem-vindo ao gerenciador de fila.
      </S.Title>
      <S.SubTitle>
        Click no perfil que descreve você
      </S.SubTitle>
      <S.ContainerButtons>
        <S.ButtonStyle>
          <Button
            onClick={ () => history.push('/queue') }
          >
            Usuário
          </Button>
        </S.ButtonStyle>
        <S.SubTitle>
          ou
        </S.SubTitle>
        <S.ButtonStyle>
          <Button
            onClick={ () => history.push('/manager') }
          >
            Gerente
          </Button>
        </S.ButtonStyle>
      </S.ContainerButtons>
    </S.Container>
  );
};

export default GetPassword;

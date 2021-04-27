import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button';
import * as S from './style';

const GetPassword = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.Title>
        Olá,
        seja bem-vindo ao gerenciador de fila!
      </S.Title>
      <S.SubTitle>
        Você é:
      </S.SubTitle>
      <S.ContainerButtons>
        <S.ButtonStyle>
          <Button
            color= "#4361ee"
            onClick={ () => history.push('/queue') }
          >
            Usuário
          </Button>
        </S.ButtonStyle>
        <S.ButtonStyle>
          <Button
            color= "#4361ee"
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

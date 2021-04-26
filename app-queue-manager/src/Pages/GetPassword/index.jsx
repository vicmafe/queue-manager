import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button';
import ButtonStyle from './style';

const GetPassword = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Olá, seja bem-vindo!</h1>
      <h3>Você é:</h3>
      <ButtonStyle>
        <Button
          onClick={ () => history.push('/queue') }
        >
          Usuário
        </Button>
      </ButtonStyle>
      <ButtonStyle>
        <Button
          onClick={ () => history.push('/manager') }
        >
          Gerente
        </Button>
      </ButtonStyle>
    </div>
  );
};

export default GetPassword;

import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import * as S from './style';
import ScreenBoard from '../../Components/ScreenPasswords';
import { Link } from 'react-router-dom';
import iconHome from '../../Images/icon-home.svg';

const Manager = () => {
  const [status, setStatus] = useState('');
  const [normalPassword, setNormalPassword] = useState(Number);
  const [preferentialPassword, setPreferentialPassword] = useState(Number);
  const [normalAtended, setNormalAtended] = useState(Number);
  const [preferentialAtended, setPreferentialAtended] = useState(Number);
  const [screenAtending, setScreenAtended] = useState();
  const message = 'Oba! sem fila de atendimento.';
  const attendig = () => {
    if (preferentialPassword && preferentialPassword > preferentialAtended) {
      const updatePreferentialAtended = preferentialAtended + 1;
      setPreferentialAtended(updatePreferentialAtended);
      const screen = atendingView('Preferencial', `P000${updatePreferentialAtended}`);
      return setScreenAtended(screen)
    }
    if (normalPassword && normalPassword > normalAtended) {
      const updateNormalAtended = normalAtended + 1;
      setNormalAtended(updateNormalAtended);
      const screen = atendingView('Normal', `N000${updateNormalAtended}`);
      return setScreenAtended(screen);
    }
    return setStatus(message);
  };
  
  const resetQueue = () => {
    setNormalPassword(0);
    setPreferentialPassword(0);
    setNormalAtended(0);
    setPreferentialAtended(0);
    localStorage.clear();
    return setStatus(message);
  };

  const updateQueue = () => {
    localStorage.setItem('normal', normalPassword);
    localStorage.setItem('normalAtended', normalAtended);
    localStorage.setItem('preferential', preferentialPassword);
    localStorage.setItem('preferentialAtended', preferentialAtended);
  };

  const verifyStorage = () => {
    if (localStorage.normal && localStorage.preferential) {
      const storageNormal = Number(localStorage.getItem('normal'));
      const storagePreferential = Number(localStorage.getItem('preferential'));
      setNormalPassword(storageNormal);
      setPreferentialPassword(storagePreferential);
    }
    if (localStorage.normalAtended && localStorage.preferentialAtended) {
      const storageNormalAtended = Number(localStorage.getItem('normalAtended'));
      const storagePreferentialAtended = Number(localStorage.getItem('preferentialAtended'));
      setNormalAtended(storageNormalAtended);
      setPreferentialAtended(storagePreferentialAtended);
    }
  };
  
  const atendingView = (queue, password) => {
    return (
      <>
        <S.SubTitleScreen>
            Próximo atendimento:
        </S.SubTitleScreen>
        <S.BoxQueue>
          <S.SubTitle>
              Fila
          </S.SubTitle>
          <S.BoxPassword>
            {queue}
          </S.BoxPassword>
          <S.SubTitle>
              Senha
          </S.SubTitle>
          <S.BoxPassword>
            {password}
          </S.BoxPassword>
        </S.BoxQueue>
      </>
    )
  }
  useEffect(() => {
    verifyStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateQueue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalPassword, preferentialPassword, normalAtended, preferentialAtended]);
  return (
    <S.Container>
      { status ? 
        <S.Status>
          { status }
        </S.Status>
        :
        <>
          <S.Title>
            Olá Gerente, qual será a sua ação?
          </S.Title>
          <S.ContainerButtons>
            <S.ButtonStyle>
              <Button
                onClick={ () => attendig() }
              >
                Chamar Próximo
              </Button>
            </S.ButtonStyle>
            <S.ButtonStyle>
              <Button
                onClick={ () => resetQueue() }
              >
                Zerar Senhas
              </Button>
            </S.ButtonStyle>
          </S.ContainerButtons>
          { screenAtending }
          <S.screen>
            <ScreenBoard />
          </S.screen>
        </>
      }
      <S.icon>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={ iconHome } alt="icon home" />
          Início
        </Link>
      </S.icon>
    </S.Container>
  )
};

export default Manager;

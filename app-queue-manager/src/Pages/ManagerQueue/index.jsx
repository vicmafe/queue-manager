import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import * as S from './style';
import ScreenBoard from '../../Components/ScreenPasswords';
import Icon from '../../Components/Icons'

const Manager = () => {
  const [status, setStatus] = useState('');
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  const [normalAtended, setNormalAtended] = useState(0);
  const [preferentialAtended, setPreferentialAtended] = useState(0);
  const attendig = () => {
    if (preferentialPassword >= 1) {
      const updateQueue = preferentialPassword - 1;
      const updatePreferentialAtended = preferentialAtended + 1;
      setPreferentialAtended(updatePreferentialAtended)
      localStorage.setItem('preferential', updateQueue);
      return localStorage.setItem('preferentialAtended', preferentialAtended);
    }
    if (normalPassword >= 1) {
      const updateQueue = normalPassword - 1;
      const updateNormalAtended = normalAtended + 1;
      setNormalAtended(updateNormalAtended);
      localStorage.setItem('normal', updateQueue);
      return localStorage.setItem('normalAtended', normalAtended);
    }
    return setStatus('Sem fila de atendimento!')
  };
  useEffect(() => {
    if (localStorage.normal && localStorage.preferential) {
      const storageNormal = Number(localStorage.normal);
      setNormalPassword(storageNormal);
      const storagePreferential = Number(localStorage.preferential);
      return setPreferentialPassword(storagePreferential);
    }
  }, []);
  return (
    <S.Container>
      { status ? 
        <S.Status>
          { status }
        </S.Status>
        :
        <S.ButtonStyle>
          <Button
            onClick={ () => attendig() }
          >
            Próximo Atendimento
          </Button>
        </S.ButtonStyle>
      }
      <ScreenBoard />
      <Icon />
    </S.Container>
  )
};

export default Manager;

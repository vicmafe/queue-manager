import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import * as S from './style';
import iconReturn from '../../Images/icon-arrow.svg';

const Queue = () => {
  const [status, setStatus] = useState('Escolha sua fila');
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  const updatePassword = (password) => {
    if (password === 'normal') {
      console.log('normal password', typeof normalPassword);
      const normalUpdatePassword = normalPassword + 1;
      setNormalPassword(normalUpdatePassword);
      setStatus('normal');
      return localStorage.setItem('normal', normalUpdatePassword);
    } else {
    const preferentialUpdatePassword = Number(preferentialPassword) + 1;
    setPreferentialPassword(preferentialUpdatePassword);
    setStatus('preferential');
    // setStatus(`${<S.Title>Sucesso!</S.Title>} Sua fila é ${<S.BoxType>{password}</S.BoxType>} e sua senha é: P000${preferentialUpdatePassword}`);
    return localStorage.setItem('preferential', preferentialUpdatePassword)
    };
  };
  useEffect(() => {
    if (localStorage.normal && localStorage.preferential) {
      const storageNormal = Number(localStorage.normal)
      setNormalPassword(storageNormal);
      const storagePreferential = Number(localStorage.preferential);
      return setPreferentialPassword(storagePreferential);
    }
    setNormalPassword(0);
    setStatus('Escolha sua fila');
    return setPreferentialPassword(0);
  }, []);
  return (
    <>
      {status === 'normal' ?
        <>
          <S.Title>
            Sucesso!
          </S.Title>
          <S.SubTitle>
            Sua Fila é
          </S.SubTitle>
          <S.BoxType>
            {status}
          </S.BoxType>
          <S.SubTitle>
            Sua senha é
          </S.SubTitle>
          <S.BoxPassword>
            P000{normalPassword}
          </S.BoxPassword>
          <Link to="/" >
            <image src={ iconReturn } alt="icon return" />
            Voltar
          </Link>
        </>
        : 
        <>
        <S.Title>
          Sucesso!
        </S.Title>
        <S.SubTitle>
          Sua Fila é
        </S.SubTitle>
        <S.BoxType>
          {status}
        </S.BoxType>
        <S.SubTitle>
          Sua senha é
        </S.SubTitle>
        <S.BoxPassword>
          P000{preferentialPassword}
        </S.BoxPassword>
        <Link to="/" >
          <image src={ iconReturn } alt="icon return" />
          Voltar
        </Link>
      </>
      }
      <Button
        onClick={ () => updatePassword('normal') }
      >
        Normal
      </Button>
      <Button
        onClick={ () => updatePassword('preferential') }
      >
        Preferencial
      </Button>
    </>
  )
};

export default Queue;

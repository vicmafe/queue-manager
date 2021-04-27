import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import ScreenBoard from '../../Components/ScreenPasswords';
import Icons from '../../Components/Icons';

const FollowQueue = () => {
  const location = useLocation();
  const typeQueue = location.children;
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  useEffect(() => {
    if (localStorage.normal && localStorage.preferential) {
      const storageNormal = Number(localStorage.normal);
      setNormalPassword(storageNormal);
      const storagePreferential = Number(localStorage.preferential);
      return setPreferentialPassword(storagePreferential);
    }
    return 'done';
  }, []);
  return (
    <S.Container>
      {typeQueue === 'normal' ?
        <>
          <S.Title>
            Sucesso!
          </S.Title>
          <S.BoxQueue>
            <S.SubTitle>
              Sua Fila
            </S.SubTitle>
            <S.BoxType>
              Normal
            </S.BoxType>
            <S.SubTitle>
              Sua senha
            </S.SubTitle>
            <S.BoxPassword>
              N000{normalPassword}
            </S.BoxPassword>
          </S.BoxQueue>
        </>
        : 
        <>
        <S.Title>
          Sucesso!
        </S.Title>
        <S.BoxQueue>
          <S.SubTitle>
            Sua Fila
          </S.SubTitle>
          <S.BoxType>
            Preferencial
          </S.BoxType>
        </S.BoxQueue>
        <S.BoxQueue>
          <S.SubTitle>
            Sua senha
          </S.SubTitle>
          <S.BoxPassword>
            P000{preferentialPassword}
          </S.BoxPassword>
        </S.BoxQueue>
      </>
      }
      <ScreenBoard />
      <Icons />
    </S.Container>
  )
};

export default FollowQueue;

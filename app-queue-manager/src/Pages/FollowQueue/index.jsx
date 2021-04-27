import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as S from './style';
import iconReturn from '../../Images/icon-arrow.svg';
import iconHome from '../../Images/icon-home.svg';

const FollowQueue = () => {
  const location = useLocation();
  const typeQueue = location.children;
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  useEffect(() => {
    if (localStorage.normal && localStorage.preferential) {
      const storageNormal = localStorage.normal;
      setNormalPassword(storageNormal);
      const storagePreferential = localStorage.preferential;
      return setPreferentialPassword(storagePreferential);
    }
    setNormalPassword(0);
    return setPreferentialPassword(0);
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
              Sua Fila:
            </S.SubTitle>
            <S.BoxType>
              Normal
            </S.BoxType>
            <S.SubTitle>
              Sua senha:
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
            Sua Fila:
          </S.SubTitle>
          <S.BoxType>
            Preferencial
          </S.BoxType>
        </S.BoxQueue>
        <S.BoxQueue>
          <S.SubTitle>
            Sua senha:
          </S.SubTitle>
          <S.BoxPassword>
            P000{preferentialPassword}
          </S.BoxPassword>
        </S.BoxQueue>
      </>
      }
      <S.BoxNav>
        <S.icon>
          <Link to="/queue" >
            <img src={ iconReturn } alt="icon return" />
          </Link>
        </S.icon>
        <S.icon>
          <Link to="/" >
            <img src={ iconHome } alt="icon home" />
          </Link>
        </S.icon>
      </S.BoxNav>
    </S.Container>
  )
};

export default FollowQueue;

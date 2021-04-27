import React, { useEffect, useState } from 'react';
import * as S from './style';

const ScreenBoard = () => {
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  useEffect(() => {
    if (localStorage.normalAtended && localStorage.preferentialAtended) {
      const storageNormal = Number(localStorage.normalAtended)
      setNormalPassword(storageNormal);
      const storagePreferential = Number(localStorage.preferentialAtended);
      return setPreferentialPassword(storagePreferential);
    }
    setNormalPassword(0);
    return setPreferentialPassword(0);
  }, []);
  return (
    <S.Container>
      <S.Title>
        Ultimas senhas em atendimento
      </S.Title>
      <S.SubTitle>
        | Normal =
      </S.SubTitle>
      <S.BoxPassword>
        N000{normalPassword}
      </S.BoxPassword>
      <S.SubTitle>
        | Preferencial =
      </S.SubTitle>
      <S.BoxPassword>
        P000{preferentialPassword}
      </S.BoxPassword>
    </S.Container>
  );
};

export default ScreenBoard;
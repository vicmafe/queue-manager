import React, { useEffect, useState } from 'react';
import * as S from './style';

const ScreenBoard = () => {
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  const [normalAtended, setNormalAtended] = useState(Number);
  const [preferentialAtended, setPreferentialAtended] = useState(Number);

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

  useEffect(() => {
    verifyStorage();
  }, []);
  return (
    <S.BoxContainer>

      <S.Container>
        <S.Title>
          Ultimas senhas em atendimento:
        </S.Title>
        <S.QueueDetails>
          <S.SubTitle>
            | Normal =
          </S.SubTitle>
          <S.BoxPassword>
            N000{normalAtended}
          </S.BoxPassword>
          <S.SubTitle>
            | Preferencial =
          </S.SubTitle>
          <S.BoxPassword>
            P000{preferentialAtended}
          </S.BoxPassword>
        </S.QueueDetails>
      </S.Container>
      <S.Container>
        <S.Title>
          Ultimas senhas geradas:
        </S.Title>
        <S.QueueDetails>
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
        </S.QueueDetails>
      </S.Container>
    </S.BoxContainer>
  );
};

export default ScreenBoard;
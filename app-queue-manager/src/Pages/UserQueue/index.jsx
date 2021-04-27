import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../Components/Button';
import * as S from './style';
import iconReturn from '../../Images/icon-arrow.svg';

const Queue = () => {
  const [normalPassword, setNormalPassword] = useState(0);
  const [preferentialPassword, setPreferentialPassword] = useState(0);
  const history = useHistory();
  const updatePassword = (password) => {
    if (password === 'normal') {
      const normalUpdatePassword = normalPassword + 1;
      setNormalPassword(normalUpdatePassword);
      localStorage.setItem('normal', normalUpdatePassword);
      return history.push({ pathname: '/followqueue', children: 'normal'})
    } else {
    const preferentialUpdatePassword = Number(preferentialPassword) + 1;
    setPreferentialPassword(preferentialUpdatePassword);
    localStorage.setItem('preferential', preferentialUpdatePassword)
    return history.push({ pathname: '/followqueue', children: 'preferential'})
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
    return setPreferentialPassword(0);
  }, []);
  return (
    <>
      <S.Title>
      Escolha sua fila:
      </S.Title>
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
      <Link to="/" >
        <image src={ iconReturn } alt="icon return" />
        Voltar
      </Link>
    </>
  )
};

export default Queue;

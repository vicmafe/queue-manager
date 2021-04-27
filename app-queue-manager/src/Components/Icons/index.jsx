import React from 'react';
import iconReturn from '../../Images/icon-arrow.svg';
import iconHome from '../../Images/icon-home.svg';
import { Link } from 'react-router-dom';
import * as S from './style';

const Icons = () => {
  return (
    <S.BoxNav>
      <S.icon>
        <Link to="/queue" style={{ textDecoration: 'none' }}>
          <img src={ iconReturn } alt="icon return" />
          Voltar
        </Link>
      </S.icon>
      <S.icon>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={ iconHome } alt="icon home" />
          Início
        </Link>
      </S.icon>
    </S.BoxNav>
  );
};

export default Icons;

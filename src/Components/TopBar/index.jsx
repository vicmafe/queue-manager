import React from 'react';
import queue from '../../Images/ImmaginePersone.png'
import * as S from './style'

const TopBar = () => {
  return (
    <S.Image>
      <img src={ queue } alt="drawing queue" />
      <img src={ queue } alt="drawing queue" />
    </S.Image>
  )
};

export default TopBar;
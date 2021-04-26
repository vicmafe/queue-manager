import React from 'react';
import SButton from './style';

const Button = ({ onClick, children }) => (
  <SButton type="button" onClick={ onClick } >
    { children }
  </SButton>
);

export default Button;

import React from 'react';
import SButton from './style';

const Button = ({ onClick, children, color, colorText }) => (
  <SButton 
    type="button"
    onClick={ onClick }
    style={{ backgroundColor: color, color: colorText }}
  >
    { children }
  </SButton>
);

export default Button;

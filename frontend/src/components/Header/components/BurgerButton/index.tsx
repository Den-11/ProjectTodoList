import React, { FC } from 'react';
import { BurgerButtonType } from './types';
import * as S from './styles'

const BurgerButton: FC<BurgerButtonType> = (props): JSX.Element => {
  const { isActive, onClick } = props

  return (
    <S.BurgerButtonContainer onClick={onClick} isActive={isActive}>
      <S.BurgerButtonItems />
      <S.BurgerButtonItems />
      <S.BurgerButtonItems />
    </S.BurgerButtonContainer>
  );
};

export default BurgerButton;

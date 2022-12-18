import React, { FC } from 'react';
import * as S from './styles'
import { PrimaryButtonType } from './types';

export const PrimaryButton: FC<PrimaryButtonType> = (props): JSX.Element => {
  const { text } = props
  
  return (
    <S.PrimaryButtonWrapper>
      <S.PrimaryButtonContainer>{text}</S.PrimaryButtonContainer>
    </S.PrimaryButtonWrapper>
  );
};

export const SubmitButton: FC<PrimaryButtonType> = (props): JSX.Element => {
  const { text } = props

  return (
    <S.PrimaryButtonWrapper>
      <S.Submit type='submit' value={text} />
    </S.PrimaryButtonWrapper>
  );
};

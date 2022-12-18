import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from 'components/FormComponents/Buttons';
import * as S from './styles'
import { FooterProps } from './types';

const RenderFooter: FC<FooterProps> = (props): JSX.Element | null => {
  const { screenType } = props

  if (screenType === 'login') {
    return (
      <S.FormFooterWrapper>
        <Link to='/signup'>Sign up</Link>
        <SubmitButton text={'Sign in'}/>
      </S.FormFooterWrapper>
    )
  }

  if (screenType === 'register') {
    return (
      <S.FormFooterWrapper>
        <Link to='/signin'>Sign in</Link>
        <SubmitButton text={'Sign up'} />
      </S.FormFooterWrapper>
    )
  }

  return null;
}

export default RenderFooter

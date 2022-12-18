import React, { FC } from 'react';
import { ErrorMessageProps } from './types'
import * as S from './styles'

const ErrorMessage: FC<ErrorMessageProps> = ({ message }): JSX.Element | null => {
  if (message) {
    return <S.ErrorMessageWrapper>{message}</S.ErrorMessageWrapper>;
  }

  return null
};



export default ErrorMessage;

import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './subpages/SignIn';
import SignUp from './subpages/SignUp';
import * as S from './styles'

export const Auth: FC = (): JSX.Element => {
  return (
    <S.AuthWrapper>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </S.AuthWrapper>
  );
};

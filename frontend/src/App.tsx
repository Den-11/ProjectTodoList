import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { MainPage } from './pages/MainPage';

export const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/*' index element={<Auth />} />
      <Route path='/main/*' element={<MainPage />} />
    </Routes>
  );
};

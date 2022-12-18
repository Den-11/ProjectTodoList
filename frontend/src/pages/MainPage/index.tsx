import React, { FC, useState, useEffect } from 'react';
import CalendarBoard from './subpages/CalendarBoard';
import { getMonthMatrix } from 'utils/calendarMatrix';
import type { RootState } from 'domain/state/store';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import LeftBar from 'components/LeftBar';
import TaskForm from './subpages/TaskForm';
import { Route, Routes } from 'react-router-dom';
import Tasks from './subpages/Tasks';
import * as S from './styles';

export const MainPage: FC = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonthMatrix());
  const currentMonthIndex = useSelector((state: RootState) => state.switch.currentMonth);

  useEffect(() => {
    setCurrentMonth(getMonthMatrix(currentMonthIndex));
  }, [currentMonthIndex]);

  return (
    <S.MainPageWrapper>
      <Header />
      <S.MainPageContainer>
        <S.MainPageItemLeft>
          <LeftBar />
        </S.MainPageItemLeft>

        <S.MainPageContent>
          <Routes>
            <Route index element={<CalendarBoard monthMatrix={currentMonth} />} />
            <Route path='calendar' element={<CalendarBoard monthMatrix={currentMonth} />} />
            <Route path='tasks/*' element={<Tasks />} />
            <Route path='creation' element={<TaskForm />} />
          </Routes>
        </S.MainPageContent>
      </S.MainPageContainer>
    </S.MainPageWrapper>
  );
};

export default MainPage;

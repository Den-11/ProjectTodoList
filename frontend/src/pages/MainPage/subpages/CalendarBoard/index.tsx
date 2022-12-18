import React, { FC } from 'react';
import { MonthMatrixType } from 'domain/types';
import SwitchMonth from 'components/CalendarComponents/SwitchMonth';
import * as S from './styles'
import RenderMonthMatrix from './components/RenderMonthMatrix';

const CalendarBoard: FC<MonthMatrixType> = ({ monthMatrix }): JSX.Element => {
  return (
    <>
      <S.SwitchMonthWrapper>
        <SwitchMonth />
      </S.SwitchMonthWrapper>
      <S.BoardContainer>
        <RenderMonthMatrix monthMatrix={monthMatrix} />
      </S.BoardContainer>
    </>
  );
};

export default CalendarBoard;

import React, { FC } from 'react';
import { DayType } from './types';
import * as S from './styles'

const DayCard: FC<DayType> = (props): JSX.Element => {
  const { day, rowIndex } = props
  return (
    <S.DayCardWrapper row={!rowIndex}>
      {!rowIndex && <S.Day>{day.dayWeekShort.toUpperCase()}</S.Day>}
      <S.DayDate>{day.dateDay}</S.DayDate>
    </S.DayCardWrapper>
  );
};

export default DayCard;

import React, { FC } from 'react';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'domain/state/store';
import { switchPreviousMonth, switchNextMonth } from 'domain/state/switchSlice';
import * as S from './styles'

const SwitchMonth: FC = (): JSX.Element => {
  const currentMonth = useSelector((state: RootState) => state.switch.currentMonth);
  const dispatch = useDispatch();

  return (
    <S.SwitchButtonsWrapper>
      <S.ArrowButtons onClick={() => dispatch(switchPreviousMonth())}>&#8592;</S.ArrowButtons>
      <S.CurrentMonth>
        {dayjs(new Date(dayjs().year(), currentMonth)).format('MMMM YYYY')}
      </S.CurrentMonth>
      <S.ArrowButtons onClick={() => dispatch(switchNextMonth({ type: '', payload: 1 }))}>
        &#8594;
      </S.ArrowButtons>
    </S.SwitchButtonsWrapper>
  );
};

export default SwitchMonth;

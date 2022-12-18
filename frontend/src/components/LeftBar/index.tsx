import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import SwitchMonth from 'components/CalendarComponents/SwitchMonth';
import * as S from './styles'

const LeftBar: FC = (): JSX.Element => {
  return (
    <S.LeftBarContainer>
      <SwitchMonth />
      <Link to='calendar'>Calendar</Link>
      <Link to='tasks'>Tasks</Link>
      <Link to='creation'>Create</Link>
    </S.LeftBarContainer>
  );
};

export default LeftBar;

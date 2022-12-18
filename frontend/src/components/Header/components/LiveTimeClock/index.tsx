import React, { FC } from 'react';
import Clock from 'react-live-clock';
import * as S from './styles'

const LiveTimeClock: FC = (): JSX.Element => {
  return (
    <S.ClockWrapper>
      <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Kyiv'} />
    </S.ClockWrapper>
  );
};

export default LiveTimeClock;

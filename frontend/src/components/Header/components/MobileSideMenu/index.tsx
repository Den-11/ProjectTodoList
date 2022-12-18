import React, { FC } from 'react';
import { PrimaryButton } from 'components/FormComponents/Buttons';
import { ActiveType } from 'domain/types';
import * as S from './styles'

const MobileSideMenu: FC<ActiveType> = (props): JSX.Element => {
  const { isActive } = props

  return (
    <S.MobileSideMenuContainer isActive={isActive}>
      <S.MobileSideMenuItems>Calendar</S.MobileSideMenuItems>
      <S.MobileSideMenuItems>Tasks</S.MobileSideMenuItems>
      <PrimaryButton text={'Create'} />
    </S.MobileSideMenuContainer>
  );
};

export default MobileSideMenu;

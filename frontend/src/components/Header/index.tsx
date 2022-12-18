import React, { FC, useState } from 'react';
import LiveTimeClock from './components/LiveTimeClock';
import BurgerButton from './components/BurgerButton';
import MobileSideMenu from './components/MobileSideMenu';
import type { RootState } from 'domain/state/store';
import { useSelector } from 'react-redux';
import * as S from './styles'

const Header: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.currentUser);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  return (
    <S.HeaderWrapper>
      <BurgerButton isActive={isMenuOpen} onClick={handleClick} />
      <MobileSideMenu isActive={isMenuOpen} />
      <S.HeaderContainer>
        <S.ProjectName>TaskCalendar</S.ProjectName>
        <S.AdditionalDataWrapper>
          <div>{user.login}</div>
          <LiveTimeClock />
        </S.AdditionalDataWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;

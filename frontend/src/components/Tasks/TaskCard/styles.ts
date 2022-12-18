import styled from 'styled-components';
import { RotateProp } from './types'

export const TaskCardWrapper = styled.div`
  width: 130px;
  height: 200px;

  @media (${({ theme }) => theme.media.tablets}) {
    width: 140px;
    height: 220px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 150px;
    height: 230px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 160px;
    height: 240px;
  }
`;

export const TaskCardContainer = styled.div<RotateProp>`
  transform-style: preserve-3d;
  transition: 0.5s linear 0.1s;
  position: relative;
  width: inherit;
  height: inherit;
  cursor: pointer;

  ${({ isBack }) =>
    isBack &&
  `
    transform: rotateY(180deg);
  `}
`;

export const CardItem = styled.div`
  backface-visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  border-radius: 6px;
  padding: 6px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  @media (${({ theme }) => theme.media.tablets}) {
    padding: 8px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 10px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    padding: 12px;
  }
`;

export const CardFront = styled(CardItem)`
  transform: rotateY(0);
`;

export const CardBack = styled(CardItem)`
  transform: rotateY(180deg);
`;

export const TextItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent;
  flex-grow: 30;
`;

export const TextItem = styled.p`
  text-align: center;
  background: transparent;
`;

export const TaskCardHeaderWrapper = styled.div`
  flex-grow: 1;
  background-color: transparent;
`;
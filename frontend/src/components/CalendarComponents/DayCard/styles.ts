import styled from 'styled-components';
import { DayCardProps } from './types';

export const DayCardWrapper = styled.div<DayCardProps>`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  border: ${({ theme }) => theme.colors.bg.secondary} 1px solid;
  border-top: ${({ row }) => row && 'none'};
`;

export const DayDate = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
`;

export const Day = styled(DayDate)`
  padding: 10px 0;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.font.secondary};
`;

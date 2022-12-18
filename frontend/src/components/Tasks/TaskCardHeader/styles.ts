import styled from 'styled-components';
import { baseTheme } from '../../../domain/styles/theme';

export const TaskCardHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  gap: 6px;
`;

export const TaskCardButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const doneIconStyles = {
  fill: baseTheme.colors.accept,
  backgroundColor: 'transparent',
  '&:hover': {
    fill: baseTheme.colors.font.secondary,
    backgroundColor: baseTheme.colors.accept,
    borderRadius: '2px',
  },
}

export const closeIconStyles = {
  fill: baseTheme.colors.font.error,
  backgroundColor: 'transparent',
  '&:hover': {
    fill: baseTheme.colors.font.secondary,
    backgroundColor: baseTheme.colors.font.error,
    borderRadius: '2px',
  },
}

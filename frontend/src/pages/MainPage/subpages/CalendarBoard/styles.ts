import styled from 'styled-components';

export const BoardContainer = styled.div`
  height: 100%;
  flex: 1 1 0;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
`;

export const SwitchMonthWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4px;

  @media (${({ theme }) => theme.media.tablets}) {
    padding-bottom: 10px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    display: none;
  }
`;
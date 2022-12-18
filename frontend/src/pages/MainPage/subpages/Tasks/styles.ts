import styled from 'styled-components';

export const TaskNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-top: 20px;

  @media (${({ theme }) => theme.media.tablets}) {
    justify-content: center;
    gap: 20px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding-top: 0;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    gap: 60px;
    padding-bottom: 26px;
  }
`;

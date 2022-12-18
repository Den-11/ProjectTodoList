import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  padding: 10px 20px;

  @media (${({ theme }) => theme.media.tablets}) {
    padding: 20px 30px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 40px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    padding: 50px;
  }
`;

export const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.media.smallScreens}) {
    flex-direction: row;
  }
`;

export const MainPageItemLeft = styled.div`
  flex-grow: 1;
`;

export const MainPageContent = styled.div`
  flex-grow: 30;

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 70%;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 80%;
  }
`;

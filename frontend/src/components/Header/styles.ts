import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 16px;

  @media (${({ theme }) => theme.media.smallScreens}) {
    gap: 0;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 40px;
  }
`;

export const AdditionalDataWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (${({ theme }) => theme.media.smallScreens}) {
    gap: 50px;
  }
`;

export const ProjectName = styled.div`
  display: none;

  @media (${({ theme }) => theme.media.smallScreens}) {
    display: block;
  }
`;

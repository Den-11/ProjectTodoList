import styled from 'styled-components';

export const LeftBarContainer = styled.div`
  display: none;
  @media (${({ theme }) => theme.media.smallScreens}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding-right: 30px;
  }
`;
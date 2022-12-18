import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  @media (${({ theme }) => theme.media.tablets}) {
    width: 70%;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 60%;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 50%;
  }
`;

export const FormName = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0;
  color: ${({ theme }) => theme.colors.font.secondary};

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 0;
  }
`;

import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const FormName = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0;

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 0;
  }
`;

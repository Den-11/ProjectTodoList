import styled from 'styled-components';

export const PrimaryButtonContainer = styled.button`
  border-radius: 20px;
  font-size: 16px;
  border: ${({ theme }) => theme.colors.button.primary} 2px solid;
  cursor: pointer;
  padding: 10px 30px;
`;

export const Submit = styled.input`
  border-radius: 20px;
  font-size: 16px;
  border: ${({ theme }) => theme.colors.button.primary} 2px solid;
  cursor: pointer;
  padding: 10px 30px;
`;

export const PrimaryButtonWrapper = styled.div`
  & * {
    transition: background-color 0.5s;
  }

  &:hover > * {
    background-color: ${({ theme }) => theme.colors.button.primary};
    color: ${({ theme }) => theme.colors.font.secondary};
    transition: background-color, color 0.5s;
  }
`;

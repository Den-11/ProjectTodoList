import styled from 'styled-components';

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const AddButtonWrapper = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  border: none;
  cursor: pointer;
  padding-top: 16px;
`;

export const AddButtonTitle = styled.p`
  color: ${({ theme }) => theme.colors.font.secondary};
`;

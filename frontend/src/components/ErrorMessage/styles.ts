import styled from 'styled-components';

export const ErrorMessageWrapper = styled.div`
  padding: 10px 0 0 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.font.error};
`;

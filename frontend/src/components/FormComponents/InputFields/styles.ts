import styled from 'styled-components';
import { IconProp } from './types';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  padding-bottom: 6px;
  padding-left: 4px;
  font-weight: 300;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const Input = styled.input`
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  width: 100%;
  padding: 10px;
  border: ${({ theme }) => theme.colors.border.primary} 1px solid;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.border.primary} 1px solid;
`;

export const IconWrapper = styled.button<IconProp>`
  display: ${({ isPasswordShow }) => (isPasswordShow ? 'none' : 'block')};
  cursor: pointer;
  position: absolute;
  top: 30%;
  right: 4%;
  border: none;
`;

export const IconOffWrapper = styled(IconWrapper)<IconProp>`
  display: ${({ isPasswordShow }) => (!isPasswordShow ? 'none' : 'block')};
`;

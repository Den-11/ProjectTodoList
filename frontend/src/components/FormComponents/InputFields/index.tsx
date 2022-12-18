import React, { FC, useState } from 'react';
import ErrorMessage from 'components/ErrorMessage';
import * as S from './styles'
import { InputProps } from './types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { baseTheme } from 'domain/styles/theme';

export const InputField: FC<InputProps> = (props): JSX.Element => {
  const { attr, validationParams } = props
  const { values, touched, errors, handleChange, handleBlur } = validationParams;
  const { name, type, placeholder, labelText } = attr;

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordShow(!isPasswordShow);

  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{labelText}</S.Label>
      <S.InputWrapper>
        <S.Input
          type={type === 'password' ? (isPasswordShow ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
        />
        {type === 'password' && (
          <>
            <S.IconWrapper isPasswordShow={isPasswordShow} onClick={togglePasswordVisibility}>
              <VisibilityIcon sx={{ fill: baseTheme.colors.font.secondary, fontSize: 17 }} />
            </S.IconWrapper>
            <S.IconOffWrapper isPasswordShow={isPasswordShow} onClick={togglePasswordVisibility}>
              <VisibilityOffIcon sx={{ fill: baseTheme.colors.font.secondary, fontSize: 17 }} />
            </S.IconOffWrapper>
          </>
        )}
      </S.InputWrapper>
      {touched[name] && errors[name] && <ErrorMessage message={errors[name]} />}
    </S.InputContainer>
  );
};

export const TextAreaField: FC<InputProps> = ({ attr, validationParams }): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur } = validationParams;
  const { cols, rows, name, placeholder, labelText } = attr;

  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{labelText}</S.Label>
      <S.TextArea
        cols={cols}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      {touched[name] && errors[name] && <ErrorMessage message={errors[name]} />}
    </S.InputContainer>
  );
};

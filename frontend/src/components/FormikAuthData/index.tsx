import React, { FC, FormEvent } from 'react';
import { InputField } from 'components/FormComponents/InputFields';
import { FormikDataProps } from './types';
import RenderFooter from './components/RenderFooter';

const FormikAuthData: FC<FormikDataProps> = (props): JSX.Element => {
  const { formikData, screenType } = props

  const formOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formikData.handleSubmit();
  }

  return (
    <form onSubmit={formOnSubmit}>
      <InputField attr={{
        type: 'text',
        name: 'login',
        placeholder: 'Input your login',
        labelText: 'Login',
      }}
      validationParams={formikData}
      />

      <InputField attr={{
        type: 'password',
        name: 'password',
        placeholder: 'Input your password',
        labelText: 'Password',
      }}
      validationParams={formikData}
      />

      {screenType === 'register' && (
        <InputField
          attr={{
            type: 'password',
            name: 'passwordConfirm',
            placeholder: 'Confirm your password',
            labelText: 'Password confirm',
          }}
          validationParams={formikData}
        />
      )}

      <RenderFooter screenType={screenType} />
    </form>
  )
}

export default FormikAuthData

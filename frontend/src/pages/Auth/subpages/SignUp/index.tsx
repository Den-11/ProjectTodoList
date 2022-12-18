import React, { FC, useCallback } from 'react';
import { Formik, FormikValues } from 'formik';
import FormikAuthData from 'components/FormikAuthData';
import { signUpFormInitialValues, signUpValidationSchema } from 'utils/authForm';
import { registerRequest } from 'domain/state/modules/user/actions';
import { useAppDispatch } from 'domain/state/hooks';
import * as S from './styles'
import { useNavigate } from 'react-router-dom';

const SignUp: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const successCb = useCallback(() => {
    navigate('/main')
  }, [navigate])

  const FormOnSubmit = (values: FormikValues) => {
    const data = { login: values.login, password: values.password };
    dispatch(registerRequest({
      data,
      successCb
    }))
  }

  return (
    <S.FormContainer>
      <S.FormName>Sign Up</S.FormName>
      <Formik
        initialValues={signUpFormInitialValues}
        onSubmit={FormOnSubmit}
        validateOnBlur
        validationSchema={signUpValidationSchema}
      >
        {(formikData) => <FormikAuthData formikData={formikData} screenType='register' />}
      </Formik>
    </S.FormContainer>
  );
};

export default SignUp

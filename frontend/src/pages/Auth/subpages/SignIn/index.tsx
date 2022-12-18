import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';
import { useAppDispatch } from 'domain/state/hooks'
import { loginRequest } from 'domain/state/modules/user/actions';
import FormikAuthData from 'components/FormikAuthData';
import { signInValidationSchema, signInFormInitialValues } from 'utils/authForm';
import * as S from './styles'

const SignIn: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  const successCb = () => {
    navigate('/main')
  }

  const formOnSubmit = (values: FormikValues) => {
    const data = { login: values.login, password: values.password };
    dispatch(loginRequest({
      data,
      successCb
    }))
  }

  return (
    <S.FormContainer>
      <S.FormName>Sign In</S.FormName>
      <Formik
        initialValues={signInFormInitialValues}
        onSubmit={formOnSubmit}
        validateOnBlur
        validationSchema={signInValidationSchema}
      >
        {(formikData) => <FormikAuthData formikData={formikData} screenType='login' />}
      </Formik>
    </S.FormContainer>
  );
};

export default SignIn

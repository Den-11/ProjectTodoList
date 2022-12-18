import * as Yup from 'yup';

export const signInValidationSchema = Yup.object({
  login: Yup.string().required('This is a required field'),
  password: Yup.string().required('This is a required field'),
});

export const signInFormInitialValues = { login: '', password: '' }

export const signUpValidationSchema = Yup.object({
  login: Yup.string().required('This is a required field'),
  password: Yup.string().required('This is a required field'),
  passwordConfirm: Yup.string()
    .required('This is a required field')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const signUpFormInitialValues = { login: '', password: '', passwordConfirm: '' }
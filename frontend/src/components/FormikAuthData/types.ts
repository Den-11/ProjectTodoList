import { FormikProps } from 'formik';
import { ScreenType } from 'types/user';

export type FormikRegisterDataValues = {
  login: string,
  password: string,
  passwordConfirm: string
}

export type FormikLoginDataValues = {
  login: string,
  password: string
}

export type FormikData = FormikProps<FormikLoginDataValues> | FormikProps<FormikRegisterDataValues>

export type FormikDataProps = {
  formikData: FormikData,
  screenType: ScreenType
}

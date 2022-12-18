import { FormikProps } from 'formik';

export type FormikLoginDataValues = {
  name: string,
  description: string
  start_date: string
  end_date: string
  subtaskName: string
  subtaskDate: string
}

export type FormikData = FormikProps<FormikLoginDataValues>

export type FormikTaskDataProps = {
  formikData: FormikData
  addSubtask: () => void
}

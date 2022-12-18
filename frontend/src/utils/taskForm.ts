import * as Yup from 'yup';
import dayjs from 'dayjs';

export const taskFormValidationSchema = Yup.object({
  name: Yup.string().required('This is a required field'),
  description: Yup.string(),
  start_date: Yup.date()
    .min(dayjs().startOf('day'), 'Start date could not be in the past')
    .required('This is a required field'),
  // endDate: Yup.date()
  //   .required('This is a required field')
  //   .min(Yup.ref('startDate'), 'End date must be later than start date'),
  subtaskName: Yup.string().required('This is a required field'),
  subtaskDate: Yup.date().required('This is a required field'),
  // .min(Yup.ref('startDate'), 'End date must be later than start date'),
});

export const taskFormInitialValues = {
  name: '',
  description: '',
  start_date: '',
  end_date: '',
  subtaskName: '',
  subtaskDate: '',
}

import { FormikProps } from 'formik';

export type InputAttributes = {
  type?: string;
  name: string;
  placeholder?: string;
  labelText: string;
  rows?: number;
  cols?: number;
};

export type InputProps = {
  attr: InputAttributes;
  validationParams: any;
}

export type IconProp = {
  isPasswordShow: boolean;
}

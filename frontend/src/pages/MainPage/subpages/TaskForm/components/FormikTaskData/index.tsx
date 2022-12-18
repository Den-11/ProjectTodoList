import { InputField, TextAreaField } from 'components/FormComponents/InputFields';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { baseTheme } from 'domain/styles/theme';
import { SubmitButton } from 'components/FormComponents/Buttons';
import React, { FC, FormEvent } from 'react';
import { FormikTaskDataProps } from './types';
import * as S from './styles'

const FormikTaskData: FC<FormikTaskDataProps> = (props): JSX.Element => {
  const { formikData, addSubtask } = props

  const preventSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formikData.handleSubmit();
  };

  return (
    <form onSubmit={preventSubmit}>
      <InputField
        attr={{
          type: 'text',
          name: 'name',
          placeholder: 'Task name',
          labelText: 'Task Name',
        }}
        validationParams={formikData}
      />

      <TextAreaField
        attr={{
          cols: 40,
          rows: 10,
          name: 'description',
          placeholder: 'Task description',
          labelText: 'Task Description',
        }}
        validationParams={formikData}
      />

      <InputField
        attr={{ type: 'date', name: 'start_date', placeholder: '', labelText: 'Start Date' }}
        validationParams={formikData}
      />

      <InputField
        attr={{ type: 'date', name: 'end_date', placeholder: '', labelText: 'End Date' }}
        validationParams={formikData}
      />

      <InputField
        attr={{
          type: 'text',
          name: 'subtaskName',
          placeholder: 'Subtask name',
          labelText: 'Subtask Name',
        }}
        validationParams={formikData}
      />

      <InputField
        attr={{
          type: 'date',
          name: 'subtaskDate',
          placeholder: '',
          labelText: 'Subtask Date',
        }}
        validationParams={formikData}
      />

      <S.AddButtonWrapper type={'button'} onClick={addSubtask}>
        <AddCircleOutlineIcon sx={{ fill: baseTheme.colors.font.primary }}/>
        <S.AddButtonTitle>Add your subtask</S.AddButtonTitle>
      </S.AddButtonWrapper>

      <S.SubmitButtonWrapper>
        <SubmitButton text={'Create'}/>
      </S.SubmitButtonWrapper>
    </form>
  )
}

export default FormikTaskData

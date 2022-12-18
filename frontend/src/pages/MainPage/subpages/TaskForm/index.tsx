import React, { FC, useState } from 'react';
import { Formik, FormikValues } from 'formik';
import * as S from './styles'
import { taskFormInitialValues, taskFormValidationSchema } from 'utils/taskForm';
import FormikTaskData from './components/FormikTaskData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'domain/state/store';
import { setData } from 'domain/state/modules/user';
import { baseUrl } from 'utils/constants';
import { SubtaskData } from 'types/user';

const TaskForm: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [subtasks, setSubtasks] = useState<SubtaskData>({});
  const user = useSelector((state: RootState) => state.user.currentUser);

  const addSubtask = () => {
    setSubtasks((prev) => {
      prev[Date.now().toString()] = {
        subtaskName: '',
        date: new Date(),
      };

      return prev
    });
  };

  const getStatus = (startDate: string) => {
    if (Date.now() < Date.parse(startDate)) {
      return 'planned';
    }

    return 'current';
  };

  const roundDate = (date: Date) => {
    const _date = new Date(date);
    return new Date(_date.getFullYear(), _date.getMonth(), _date.getDate());
  };

  const addTask = (inputtedValues: FormikValues) => {
    const { name, description, end_date, start_date } = inputtedValues;
    const { login, tasks } = user;

    const newTasks = {
      ...tasks,
      [Date.now().toString()]: {
        name,
        description,
        end_date: roundDate(end_date),
        start_date: roundDate(start_date),
        status: getStatus(start_date),
        created_at: new Date(),
        subtasks: subtasks,
      },
    };

    const userData = {
      login,
      tasks: newTasks,
    };

    dispatch(setData({ payload: userData }));

    return userData;
  };

  const createFormSubmit = async (values: FormikValues) => {
    const updatedUser = addTask(values);
    const { data: response } = await axios.post(baseUrl + 'update', updatedUser);

    if (response.status === 200) {
      navigate('/main');
    } else {
      alert(response.message);
    }
  };

  return (
    <S.FormContainer>
      <S.FormName>Create the task</S.FormName>
      <Formik
        initialValues={taskFormInitialValues}
        onSubmit={createFormSubmit}
        validateOnBlur
        validationSchema={taskFormValidationSchema}
      >
        {(formikData) => <FormikTaskData addSubtask={addSubtask} formikData={formikData}/>}
      </Formik>
    </S.FormContainer>
  );
};

export default TaskForm;

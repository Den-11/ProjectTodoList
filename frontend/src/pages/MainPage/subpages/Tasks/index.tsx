import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TasksWrapper from 'components/Tasks/TasksWrapper';
import { useSelector } from 'react-redux';
import { RootState } from 'domain/state/store';
import TaskCard from 'components/Tasks/TaskCard';
import * as S from './styles'

const Tasks: FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const taskKeys = Object.keys(user.tasks);

  return (
    <>
      <S.TaskNav>
        <Link to='planned'>Planned</Link>
        <Link to='current'>In Progress</Link>
        <Link to='done'>Done</Link>
        <Link to='failed'>Failed</Link>
      </S.TaskNav>

      <Routes>
        <Route index element={<TasksWrapper status='planned' />} />
        <Route path='planned' element={<TasksWrapper status='planned' />} />
        <Route path='current' element={<TasksWrapper status='current' />} />
        <Route path='done' element={<TasksWrapper status='done' />} />
        <Route path='failed' element={<TasksWrapper status='failed' />} />
      </Routes>
    </>
  );
};


export default Tasks;

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'domain/state/store';
import TaskCard from '../TaskCard';
import { WrapperType } from './types';
import * as S from './styles'

const TasksWrapper: FC<WrapperType> = ({ status }): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const tasks = user.tasks;
  const tasksByStatus = {};

  for (const key in tasks) {
    if (tasks[key].status === status) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tasksByStatus[key] = tasks[key];
    }
  }

  const tasksByStatusKeys = Object.keys(tasksByStatus);

  return (
    <S.TaskCardsWrapper>
      {tasksByStatusKeys.map((key: string, index: number) => {
        return (
          <React.Fragment key={index}>
            <TaskCard id={key} />
          </React.Fragment>
        );
      })}
    </S.TaskCardsWrapper>
  );
};

export default TasksWrapper;

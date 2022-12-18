import React, { FC, useMemo, useState } from 'react';
import TaskCardHeader from '../TaskCardHeader';
import * as S from './styles'
import { TasksCardType } from './types';
import { useSelector } from 'react-redux';
import { RootState } from 'domain/state/store';

const TasksCard: FC<TasksCardType> = (props): JSX.Element => {
  const { id } = props
  const [isBack, setIsBack] = useState(false);
  const task = useSelector((state: RootState) => state.user.currentUser.tasks[id]);

  const handleClick = () => {
    setIsBack(!isBack);
  };

  const startDate = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return task.start_date.toString()
  }, [task])

  const endDate = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return task.end_date.toString()
  }, [task])
  
  return (
    <S.TaskCardWrapper>
      <S.TaskCardContainer isBack={isBack}>
        <S.CardFront>
          <S.TaskCardHeaderWrapper>
            <TaskCardHeader />
          </S.TaskCardHeaderWrapper>
          <S.TextItemWrapper onClick={handleClick}>
            <S.TextItem>{task.name}</S.TextItem>
          </S.TextItemWrapper>
        </S.CardFront>
        <S.CardBack>
          <S.TaskCardHeaderWrapper>
            <TaskCardHeader />
          </S.TaskCardHeaderWrapper>
          <S.TextItemWrapper onClick={handleClick}>
            <S.TextItem>{startDate}</S.TextItem>
            <S.TextItem>{endDate}</S.TextItem>
          </S.TextItemWrapper>
        </S.CardBack>
      </S.TaskCardContainer>
    </S.TaskCardWrapper>
  );
};

export default TasksCard;

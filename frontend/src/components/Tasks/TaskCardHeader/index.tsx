import React, { FC } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import * as S from './styles'

const TaskCardHeader: FC = (): JSX.Element => {
  return (
    <S.TaskCardHeaderWrapper>
      <S.TaskCardButton>
        <DoneIcon
          sx={S.doneIconStyles}
        />
      </S.TaskCardButton>
      <S.TaskCardButton>
        <CloseIcon
          sx={S.closeIconStyles}
        />
      </S.TaskCardButton>
    </S.TaskCardHeaderWrapper>
  );
};

export default TaskCardHeader;

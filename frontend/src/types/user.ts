export type ScreenType = 'register' | 'login'

type AuthFields = {
  login: string
  password: string
}

export type AuthRequestProps = {
  data: AuthFields,
  successCb: () => void
}

export type AuthRequestUrl = 'signIn' | 'signUp'

export type AuthRequest = {
  request: AuthFields,
  url: AuthRequestUrl,
  successCb: () => void
}

export type SubtaskData = {
  [id: string]: {
    subtaskName: string;
    subtaskDescription?: string;
    date: Date;
  };
};

export type TaskData = {
  [id: string]: {
    status: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    subtasks?: SubtaskData;
  };
};

export type UserRecord = {
  login: string;
  tasks: TaskData;
};

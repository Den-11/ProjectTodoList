import { configureStore, combineReducers, CombinedState, ThunkDispatch, AnyAction, ThunkAction } from '@reduxjs/toolkit';

// import switchR from './switchSlice';
import switchSlice from './switchSlice';
import user from './modules/user';

const rootReducer = combineReducers({
  switch: switchSlice,
  user: user,
});

export const store = configureStore({
  reducer: rootReducer,
});

type CleanState<T> = T extends CombinedState<infer S> ? { [K in keyof S]: CleanState<S[K]>} : T
export type RootState = CleanState<ReturnType<typeof store.getState>>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

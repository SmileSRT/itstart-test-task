import { useReducer } from 'react';
import type { ISeminar } from '../../types';
import { actions, reducer } from './reducer';

export const useEditSeminar = (initialState: ISeminar) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  const changeTitle = (value: string) => {
    dispatcher({ type: actions.CHANGE_TITLE, payload: value });
  };

  const changeDescription = (value: string) => {
    dispatcher({ type: actions.CHANGE_DESCRIPTION, payload: value });
  };

  const changeDate = (newDate: string) => {
    dispatcher({ type: actions.CHANGE_DATE, payload: newDate });
  };

  return { state, changeTitle, changeDescription, changeDate };
};

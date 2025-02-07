import { Reducer } from 'react';
import type { ISeminar } from '../../types';

export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
  CHANGE_DESCRIPTION: 'CHANGE_DESCRIPTION',
  CHANGE_DATE: 'CHANGE_DATE',
} as const;

type ActionTypes =
  | {
      type: typeof actions.CHANGE_DESCRIPTION;
      payload: string;
    }
  | { type: typeof actions.CHANGE_TITLE; payload: string }
  | { type: typeof actions.CHANGE_DATE; payload: string };

export const reducer: Reducer<ISeminar, ActionTypes> = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
    case actions.CHANGE_DESCRIPTION: {
      return { ...state, description: action.payload };
    }
    case actions.CHANGE_DATE: {
      return { ...state, date: action.payload };
    }
    default: {
      return state;
    }
  }
};

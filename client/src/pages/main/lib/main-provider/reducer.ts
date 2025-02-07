import type { Reducer } from 'react';
import type { ISeminar } from '../../types';

export const actions = {
  FETCH_LIST: 'FETCH_LIST',
  DELETE_SEMINAR: 'DELETE_SEMINAR',
  CHANGE_SEMINAR: 'CHANGE_SEMINAR',
} as const;

type ActionTypes =
  | {
      type: typeof actions.CHANGE_SEMINAR;
      payload: ISeminar;
    }
  | { type: typeof actions.DELETE_SEMINAR; payload: number }
  | { type: typeof actions.FETCH_LIST; payload: ISeminar[] };

export const reducer: Reducer<ISeminar[], ActionTypes> = (state, action) => {
  switch (action.type) {
    case actions.FETCH_LIST: {
      return action.payload;
    }
    case actions.DELETE_SEMINAR: {
      return state.filter(item => item.id !== action.payload);
    }
    case actions.CHANGE_SEMINAR: {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
    }
    default:
      return state;
  }
};

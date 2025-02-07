import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useReducer,
  useState,
} from 'react';
import { ISeminar } from '../../types';
import { actions, reducer } from './reducer';
import { fetchSeminarsList } from '../../api/seminars';

interface IListContext {
  list: ISeminar[];
  isLoading: boolean;
  fetchList: () => void;
  changeItem: (item: ISeminar) => void;
  deleteItem: (id: number) => void;
}

const ListContext = createContext<IListContext>({} as IListContext);

export const useList = () => useContext(ListContext);

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, dispatcher] = useReducer(reducer, []);

  const deleteItem = (id: number) => {
    dispatcher({ type: actions.DELETE_SEMINAR, payload: id });
  };

  const changeItem = (seminar: ISeminar) => {
    dispatcher({ type: actions.CHANGE_SEMINAR, payload: seminar });
  };

  const fetchList = useCallback(async () => {
    setIsLoading(true);
    const list = await fetchSeminarsList();

    if (list) {
      dispatcher({ type: actions.FETCH_LIST, payload: list });
    }

    setIsLoading(false);
  }, []);

  return (
    <ListContext.Provider
      value={{ list, isLoading, deleteItem, changeItem, fetchList }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default MainProvider;

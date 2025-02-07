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
import { deleteSeminar, fetchSeminarsList } from '../../api/seminars';

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

  const deleteItem = async (id: number) => {
    setIsLoading(true);
    const response = await deleteSeminar(id);

    if (response) {
      dispatcher({ type: actions.DELETE_SEMINAR, payload: id });
    }

    setIsLoading(false);
  };

  const changeItem = (item: ISeminar) => {
    dispatcher({ type: actions.CHANGE_SEMINAR, payload: item });
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

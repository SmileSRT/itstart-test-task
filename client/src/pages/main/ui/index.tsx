import { type FC } from 'react';
import SeminarsList from './seminars-list';
import MainProvider from '../lib/main-provider/main-provider';

const MainPage: FC = () => {
  return (
    <MainProvider>
      <SeminarsList />
    </MainProvider>
  );
};

export default MainPage;

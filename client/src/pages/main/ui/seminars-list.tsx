import { useEffect, type FC } from 'react';
import SeminarCard from './seminar-card';
import { useList } from '../lib/main-provider/main-provider';

const SeminarsList: FC = () => {
  const { list, fetchList, isLoading } = useList();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if (isLoading) {
    return <>Загрузка</>;
  }

  return (
    <div>
      {list.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-4">
          {list.map(seminar => (
            <li key={seminar.id}>
              <SeminarCard seminar={seminar} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeminarsList;

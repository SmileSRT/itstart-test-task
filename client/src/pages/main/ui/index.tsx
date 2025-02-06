import { useEffect, useState, type FC } from 'react';
import { fetchSeminarsList } from '../api/seminars';
import { ISeminar } from '../types';
import SeminarCard from './seminar-card';

const MainPage: FC = () => {
  const [seminarsList, setSeminarsList] = useState<ISeminar[]>([]);

  const fetchSeminars = async () => {
    const data = await fetchSeminarsList();

    if (data) {
      setSeminarsList(data);
    }
  };

  useEffect(() => {
    fetchSeminars();
  }, []);

  return (
    <div>
      {seminarsList.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-4">
          {seminarsList.map(seminar => (
            <li key={seminar.id}>
              <SeminarCard {...seminar} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainPage;

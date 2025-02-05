import { useEffect, useState, type FC } from 'react';
import { fetchSeminarsList } from '../api/seminars';
import { ISeminar } from '../types';

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
        <ul>
          {seminarsList.map(seminar => (
            <li key={seminar.id}>{seminar.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainPage;

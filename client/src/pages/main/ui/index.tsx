import { useEffect, useState, type FC } from 'react';
import { fetchSeminarsList } from '../api/seminars';
import { ISeminar } from '../types';
import { Button } from '@/shared/ui/button';
import { Pencil, SquareX } from 'lucide-react';

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
              <article className="border w-[400px] border-gray-300 h-full pb-4 rounded-lg">
                <img
                  src={seminar.photo}
                  alt={seminar.title}
                  width={300}
                  height={300}
                  className="w-full rounded-lg opacity-80"
                />

                <section className="p-3 flex justify-between">
                  <div>
                    <h5 className="font-bold text-lg">{seminar.title}</h5>
                    <span className="text-xs text-gray-500">
                      {seminar.date}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Pencil />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <SquareX />
                    </Button>
                  </div>
                </section>

                <p className="px-2 text-gray-500">{seminar.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainPage;

import type { FC } from 'react';
import { ISeminar } from '../types';
import ModalEditCard from './modal-edit-card';
import ModalDeleteCard from './modal-delete-card';

const SeminarCard: FC<ISeminar> = ({ photo, title, date, id, description }) => {
  return (
    <article className="border w-[400px] border-gray-300 h-full pb-4 rounded-lg">
      <img
        src={photo}
        alt={title}
        width={300}
        height={300}
        className="w-full rounded-lg opacity-80"
      />

      <section className="p-3 flex justify-between">
        <div>
          <h5 className="font-bold text-lg">{title}</h5>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <div className="flex gap-1">
          <ModalEditCard title={title} description={description} />
          <ModalDeleteCard id={id} title={title} />
        </div>
      </section>

      <p className="px-2 text-gray-500">{description}</p>
    </article>
  );
};

export default SeminarCard;

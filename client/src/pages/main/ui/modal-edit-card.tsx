import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Pencil } from 'lucide-react';
import { FormEvent, useState, type FC } from 'react';
import { ISeminar } from '../types';
import { useEditSeminar } from '../lib/use-edit-seminar/use-edit-seminar';
import { useList } from '../lib/main-provider/main-provider';
import ButtonLoader from '@/shared/ui/button-loader';
import DatePicker from '@/shared/ui/date-picker';
import { formatedStringToDate, formattedDateToString } from '../lib';

const ModalEditCard: FC<{ seminar: ISeminar }> = ({ seminar }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { state, changeDescription, changeTitle, changeDate } =
    useEditSeminar(seminar);
  const { changeItem } = useList();

  const saveHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    changeItem(state);
    setOpenModal(false);
  };

  const onChangeDate = (newDate?: Date) => {
    if (newDate) {
      changeDate(formattedDateToString(newDate));
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Редактирование</DialogTitle>
        </DialogHeader>

        <form
          className="grid gap-4 py-4"
          id="edit-form"
          onSubmit={event => saveHandler(event)}
        >
          <Input
            id="name"
            value={state.title}
            onChange={event => changeTitle(event.target.value)}
          />

          <Input
            id="username"
            value={state.description}
            onChange={event => changeDescription(event.target.value)}
          />
          <DatePicker
            date={formatedStringToDate(state.date)}
            onChange={onChangeDate}
          />
        </form>

        <DialogFooter>
          <ButtonLoader form="edit-form">Сохранить</ButtonLoader>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditCard;

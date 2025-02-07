import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { SquareX } from 'lucide-react';
import type { FC } from 'react';
import { useList } from '../lib/main-provider/main-provider';
import ButtonLoader from '@/shared/ui/button-loader';

const ModalDeleteCard: FC<{ id: number; title: string }> = ({ id, title }) => {
  const { deleteItem, isDeleteLoading } = useList();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SquareX />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Удаление</DialogTitle>
        </DialogHeader>

        <div className="text-center">
          <p>Вы действительно хотите удалить </p>
          <p className="text-blue-500 font-bold">{title}?</p>
        </div>

        <DialogFooter>
          <ButtonLoader
            variant="destructive"
            onClick={() => deleteItem(id)}
            isLoading={isDeleteLoading}
          >
            Удалить
          </ButtonLoader>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeleteCard;

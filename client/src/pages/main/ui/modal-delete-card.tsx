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

const ModalDeleteCard: FC<{ id: number; title: string }> = ({ title }) => {
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
          <Button variant="destructive">Удалить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeleteCard;

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
import type { FC } from 'react';

const ModalEditCard: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Редактирование</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <Input id="name" value={title} />
          </div>
          <div>
            <Input id="username" value={description} />
          </div>
        </div>

        <DialogFooter>
          <Button>Сохранить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditCard;

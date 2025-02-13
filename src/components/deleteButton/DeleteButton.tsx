import { FC, useTransition } from 'react';
import { LoaderPinwheelIcon, Trash2 } from 'lucide-react';

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { deleteButtonTexts } from '@/components/deleteButton/texts';

export const DeleteButton: FC<{ productName: string; onSubmit: () => Promise<void> }> = ({ productName, onSubmit }) => {
    const [isDeleting, startDeleting] = useTransition();

    const handleDelete = async () =>
        startDeleting(async () => {
            await onSubmit();
        });

    return (
        <Dialog>
            <DialogTrigger asChild disabled={isDeleting}>
                <Button variant="outline" size="icon">
                    {isDeleting ? <LoaderPinwheelIcon className="animate-spin" /> : <Trash2 />}
                </Button>
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle>{deleteButtonTexts.title}</DialogTitle>
                    <DialogDescription>{deleteButtonTexts.description(productName)}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">{deleteButtonTexts.buttons.cancel}</Button>
                    </DialogClose>
                    <Button type="button" variant="destructive" onClick={handleDelete}>
                        {deleteButtonTexts.buttons.delete}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { ReactNode } from 'react';

type TDialogConfirmationProps = {
  alertTitle: string;
  alertDescription: string | React.ReactNode;
  alertFinalMessage: string;
  onConfirm: () => void;
  onCancel?: () => void;
  children: ReactNode;
};

export default function AlertDialogConfirmation({
  alertTitle,
  alertDescription,
  alertFinalMessage,
  onConfirm,
  onCancel,
  children,
}: TDialogConfirmationProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className='flex justify-between'>
            <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
            <AlertDialogCancel className='bg-none outline-0 border-none border-ring-0 hover:border-none hover:bg-none hover:border-ring-0' onClick={onCancel}>x</AlertDialogCancel>
          </div>
          <AlertDialogDescription>{alertDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='w-full bg-primary-orange' onClick={onConfirm}>{alertFinalMessage}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

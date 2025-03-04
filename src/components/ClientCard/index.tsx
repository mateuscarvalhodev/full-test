import { TClientCards } from '@/types/TClientCard';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Pencil, Plus, Trash2, Minus } from 'lucide-react';
import { Button } from '../ui/button';
import AlertDialogConfirmation from '../AlertDialogConfirmation';
import { toast } from 'sonner';

export default function ClientCard({
  onAdd,
  onEdit,
  onDelete,
  onRemove,
  variant = 'default',
  clientData,
}: TClientCards) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  const { enterprisePrice, name, salary, isSelected } = clientData;

  return (
    <Card className='flex flex-col items-center'>
      <CardHeader className='text-center'>
        <CardTitle className='capitalize'>{name}</CardTitle>
      </CardHeader>
      <CardContent className='text-center'>
        <p>Salário: {formatCurrency(salary)}</p>
        <p>Empresa: {formatCurrency(enterprisePrice)}</p>
      </CardContent>

      <CardFooter className='w-full flex items-center justify-between px-2'>
        {variant === 'selected' ? (
          <Button
            onClick={() => onRemove?.(clientData)}
            className='ml-auto text-3xl font-bold text-red-500 bg-white hover:bg-white cursor-pointer'
          >
            <Minus />
          </Button>
        ) : (
          <>
            <Button
              onClick={() => {
                if (isSelected) {
                  toast('Cliente já está selecionado.');
                  return;
                }
                onAdd?.(clientData);
              }}
              className='text-3xl font-bold text-dark hover:bg-primary-orange hover:text-white bg-white cursor-pointer'
            >
              <Plus />
            </Button>
            {onEdit && (
              <Button
                onClick={() => onEdit(clientData)}
                className='text-3xl font-bold text-dark hover:bg-primary-orange hover:text-white bg-white cursor-pointer'
              >
                <Pencil />
              </Button>
            )}
            <AlertDialogConfirmation
              alertTitle='Excluir cliente:'
              alertFinalMessage='Excluir cliente'
              alertDescription={
                <>
                  Você está prestes a excluir o cliente:{' '}
                  <span className='font-bold'>{name}</span>.
                </>
              }
              onConfirm={onDelete ?? (() => { })}
            >
              <Button className='text-3xl font-bold text-red-500 bg-white hover:bg-red-100 cursor-pointer'>
                <Trash2 />
              </Button>
            </AlertDialogConfirmation>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
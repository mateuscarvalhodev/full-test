import { TClientCards } from '@/types/TClientCard';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Pencil, Plus, Trash2, Minus } from 'lucide-react';
import { Button } from '../ui/button';
import AlertDialogConfirmation from '../AlertDialogConfirmation';

export default function ClientCard({
  name,
  salary: priceSalary,
  enterprisePrice,
  onAdd,
  onEdit,
  onDelete,
  onRemove,
  variant = 'default',
}: TClientCards) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return (
    <Card className='max-w-[455px] flex flex-col items-center'>
      <CardHeader className='text-center'>
        <CardTitle className='capitalize'>{name}</CardTitle>
      </CardHeader>
      <CardContent className='text-center'>
        <p>Salário: {formatCurrency(priceSalary)}</p>
        <p>Empresa: {formatCurrency(enterprisePrice)}</p>
      </CardContent>

      <CardFooter className='w-full flex items-center justify-between px-2'>
        {variant === 'selected' ? (
          <Button
            onClick={onRemove}
            className='ml-auto text-3xl font-bold text-red-500 bg-white hover:bg-white cursor-pointer'
          >
            <Minus />
          </Button>
        ) : (
          <>
            <Button
              onClick={onAdd}
              className='text-3xl font-bold text-dark bg-white cursor-pointer'
            >
              <Plus />
            </Button>
            <Button
              onClick={onEdit}
              className='text-3xl font-bold text-dark bg-white cursor-pointer'
            >
              <Pencil />
            </Button>
            <AlertDialogConfirmation
              alertTitle="Excluir cliente:"
              alertFinalMessage='Excluir cliente'
              alertDescription={
                <>
                  Você está prestes a excluir o cliente: <span className="font-bold">{name}</span>.
                </>
              }
              onConfirm={onDelete ?? (() => { })}

            >
              <Button
                className='text-3xl font-bold text-red-500 bg-white hover:bg-white cursor-pointer'
              >
                <Trash2 />
              </Button>
            </AlertDialogConfirmation>
          </>
        )
        }
      </CardFooter >
    </Card >
  );
}
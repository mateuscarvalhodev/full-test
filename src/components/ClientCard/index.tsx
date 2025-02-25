import { TClientCards } from '@/types/TClientCard';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

export default function ClientCard({
  name,
  priceSalary,
  priceEnterprise,
  onAdd,
  onEdit,
  onDelete,
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
        <p>Empresa: {formatCurrency(priceEnterprise)}</p>
      </CardContent>
      <CardFooter className='w-full flex items-center justify-between px-2'>
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
        <Button
          onClick={onDelete}
          className='text-3xl font-bold text-red-500 bg-white hover:bg-white cursor-pointer'
        >
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  );
}
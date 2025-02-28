'use client';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { createClient } from '@/api/createClients';
import { patchClient } from '@/api/editUser';
import { toast } from 'sonner';
import { TNewClient, Client } from '@/types/TClientCard';
import MoneyInput from '../MoneyInput';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username deve ter no mínimo 2 caracteres.',
  }),
  salary: z.coerce.number().min(0, {
    message: 'O salário deve ser um número positivo.',
  }),
  enterprisePrice: z.coerce.number().min(0, {
    message: 'O valor da empresa deve ser um número positivo.',
  }),
});

interface FormClientProps {
  client?: Client;
  onSuccess?: (client: Client) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormClient({ client, onSuccess, open, setOpen }: FormClientProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: client?.name || '',
      salary: client?.salary || 0,
      enterprisePrice: client?.enterprisePrice || 0,
    },
  });

  useEffect(() => {
    if (client) {
      form.reset({
        username: client.name,
        salary: client.salary,
        enterprisePrice: client.enterprisePrice,
      });
    } else {
      form.reset({
        username: '',
        salary: 0,
        enterprisePrice: 0,
      });
    }
  }, [client, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userId = Number(localStorage.getItem('userId'));
      if (client) {
        const updatedClient: Client = {
          id: client.id,
          userId,
          name: values.username,
          salary: values.salary,
          enterprisePrice: values.enterprisePrice,
          isSelected: client.isSelected,
        };
        const res = await patchClient(updatedClient);
        toast('Cliente atualizado com sucesso.');
        onSuccess?.(res);
      } else {
        const newClient: TNewClient = {
          userId,
          name: values.username,
          salary: values.salary,
          enterprisePrice: values.enterprisePrice,
        };
        const res = await createClient(newClient);
        toast('Cliente criado com sucesso.');
        onSuccess?.(res);
      }
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
      toast(`Erro ao salvar cliente: ${error}`);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='font-bold'>
            {client ? 'Editar cliente' : 'Criar cliente'}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Digite o nome do cliente' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <MoneyInput
              form={form}
              name='salary'
              placeholder='Digite o salário'
            />
            <MoneyInput
              form={form}
              name='enterprisePrice'
              placeholder='Digite o valor da empresa'
            />

            <Button className='w-full bg-primary-orange hover:bg-amber-700' type='submit'>
              {client ? 'Atualizar cliente' : 'Criar cliente'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { createClient } from '@/api/createClients';
import { toast } from 'sonner';

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

export default function FormCreateClient() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      salary: 0,
      enterprisePrice: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const newClient = {
        name: values.username,
        salary: values.salary,
        enterprisePrice: values.enterprisePrice,
      };
      const createdClient = await createClient(newClient);
      console.log('Cliente criado com sucesso:', createdClient);
      toast('Cliente criado com sucesso.',)
      form.reset();
    } catch (error) {
      toast(`Erro ao criar cliente: ${error}`)
      console.error('Erro ao criar cliente:', error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className='col-span-full w-full border-2 border-primary-orange bg-white text-primary-orange cursor-pointer rounded h-9'>
        Criar cliente
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-bold'>Criar cliente:</DialogTitle>

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
            <FormField
              control={form.control}
              name='salary'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type='number' placeholder='Digite o salário' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='enterprisePrice'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type='number' placeholder='Digite o valor da empresa' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full bg-primary-orange hover:bg-amber-700' type='submit'>
              Criar cliente
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
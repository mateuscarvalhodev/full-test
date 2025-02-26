import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
      console.error('Erro ao criar cliente:', error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className='col-span-full w-full border-2 border-amber-600 bg-white text-amber-600 cursor-pointer rounded h-9'>
        Criar cliente
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-bold'>Criar cliente:</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar um novo cliente.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
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
                  <FormLabel>Salário</FormLabel>
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
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder='Digite o valor da empresa' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full bg-amber-600 hover:bg-amber-700' type='submit'>
              Criar cliente
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


// import React, { useState, useEffect } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm, Controller } from 'react-hook-form';
// import { z } from 'zod';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '../ui/dialog';
// import { createClient } from '@/api/createClients';

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: 'Username deve ter no mínimo 2 caracteres.',
//   }),
//   salary: z.coerce.number().min(0, {
//     message: 'O salário deve ser um número positivo.',
//   }),
//   enterprisePrice: z.coerce.number().min(0, {
//     message: 'O valor da empresa deve ser um número positivo.',
//   }),
// });

// const moneyFormatter = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
//   currencyDisplay: 'narrowSymbol',
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2,
// });

// type CurrencyInputProps = {
//   value: number;
//   onChange: (value: number) => void;
//   placeholder?: string;
// };

// function CurrencyInput({ value, onChange, placeholder }: CurrencyInputProps) {
//   const [raw, setRaw] = useState(String(Math.round(value * 100)));
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     setRaw(String(Math.round(value * 100)));
//   }, [value]);

//   const formattedValue = moneyFormatter.format(Number(raw) / 100);
//   const editingValue = (Number(raw) / 100).toFixed(2).replace('.', ',');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const digits = e.target.value.replace(/\D/g, '');
//     setRaw(digits);
//     const numeric = Number(digits) / 100;
//     onChange(numeric);
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <input
//       type='text'
//       value={isFocused ? editingValue : formattedValue}
//       placeholder={placeholder}
//       onChange={handleChange}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       className='w-full p-2 border rounded'
//     />
//   );
// }

// export default function FormCreateClient() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: '',
//       salary: 0,
//       enterprisePrice: 0,
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     try {
//       const newClient = {
//         name: values.username,
//         salary: values.salary,
//         enterprisePrice: values.enterprisePrice,
//       };
//       const createdClient = await createClient(newClient);
//       console.log('Cliente criado com sucesso:', createdClient);
//       form.reset();
//     } catch (error) {
//       console.error('Erro ao criar cliente:', error);
//     }
//   }

//   return (
//     <Dialog>
//       <DialogTrigger className='col-span-full w-full border-2 border-amber-600 bg-white text-amber-600 cursor-pointer rounded h-9'>
//         Criar cliente
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle className='font-bold'>Criar cliente:</DialogTitle>
//           <DialogDescription>
//             Preencha os campos abaixo para criar um novo cliente.
//           </DialogDescription>
//         </DialogHeader>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
//             <FormField
//               control={form.control}
//               name='username'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input placeholder='Digite o nome do cliente' {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Controller
//               control={form.control}
//               name='salary'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Salário</FormLabel>
//                   <FormControl>
//                     <CurrencyInput
//                       value={field.value}
//                       onChange={field.onChange}
//                       placeholder='Digite o salário'
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Controller
//               control={form.control}
//               name='enterprisePrice'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Empresa</FormLabel>
//                   <FormControl>
//                     <CurrencyInput
//                       value={field.value}
//                       onChange={field.onChange}
//                       placeholder='Digite o valor da empresa'
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button className='w-full bg-amber-600 hover:bg-amber-700' type='submit'>
//               Criar cliente
//             </Button>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// }
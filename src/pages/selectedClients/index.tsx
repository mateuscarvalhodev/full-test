import Header from '@/components/Header';
import ClientCard from '@/components/ClientCard';
import { TClientCards } from '@/types/TClientCard';

export default function SelectedClients() {
  const selectedClients = [
    {
      id: 1,
      name: 'Mateus Carvalho Rodrigues',
      priceEnterprise: 120000,
      priceSalary: 3500,
    },
  ];

  function handleRemoveClient(client: TClientCards) {
    console.log('Removendo cliente', client.clientData);
  }

  return (
    <>
      <Header />
      <main className='w-screen bg-slate-50 mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16'>
        {selectedClients.length > 0 ? (
          selectedClients.map((client) => (
            <ClientCard
              id={client.id}
              name={client.name}
              enterprisePrice={client.priceEnterprise}
              salary={client.priceSalary}
              variant='selected'
              onDelete={() => handleRemoveClient(client)}
            />
          ))
        ) : (
          <p className='text-center col-span-full'>Nenhum cliente selecionado.</p>
        )}
      </main>
    </>
  );
}
import { useEffect, useState } from 'react';
import ClientCard from '@/components/ClientCard';
import { getClients } from '@/api/getClients';
import { toast } from 'sonner';
import { Client } from '@/types/TClientCard';
import { Button } from '@/components/ui/button';
import { patchClient } from '@/api/editUser';

export default function SelectedClients() {
  const [selectedClients, setSelectedClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      const userId = Number(storedUserId);
      getClients(userId)
        .then((data: Client[]) => {
          const filtered = data.filter((client) => client.isSelected);
          setSelectedClients(filtered);
        })
        .catch((error) => {
          console.error('Erro ao buscar clientes:', error);
          toast('Erro ao carregar clientes.');
        })
        .finally(() => setIsLoading(false));
    } else {
      console.error('userId não encontrado.');
      setIsLoading(false);
    }
  }, []);

  function handleRemoveClient(client: Client) {
    const updatedClient = { ...client, isSelected: false };
    patchClient(updatedClient)
      .then((res) => {
        setSelectedClients((prev) => prev.filter((c) => c.id !== res.id));
        toast('Cliente removido com sucesso.');
      })
      .catch((err) => {
        console.error('Erro ao remover cliente:', err);
        toast('Erro ao remover cliente.');
      });
  }

  function handleClearSelected() {
    const promises = selectedClients.map((client) => {
      const updatedClient = { ...client, isSelected: false };
      return patchClient(updatedClient);
    });
    Promise.all(promises)
      .then(() => {
        setSelectedClients([]);
        toast('Todos os clientes selecionados foram limpos.');
      })
      .catch((err) => {
        console.error('Erro ao limpar clientes selecionados:', err);
        toast('Erro ao limpar clientes selecionados.');
      });
  }

  return (
    <>
      <main className="w-full bg-slate-50 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16">
        {isLoading ? (
          <p>Carregando...</p>
        ) : selectedClients.length > 0 ? (
          selectedClients.map((client) => (
            <ClientCard
              key={client.id}
              clientData={client}
              variant="selected"
              onRemove={() => handleRemoveClient(client)}
            />
          ))
        ) : (
          <p className="text-center col-span-full">
            Nenhum cliente selecionado.
          </p>
        )}

      </main>
      <Button
        onClick={handleClearSelected}
        className="col-span-full w-full border-2 border-primary-orange hover:bg-white bg-white text-primary-orange cursor-pointer"
      >
        Limpar clientes selecionados
      </Button>
    </>
  );
}
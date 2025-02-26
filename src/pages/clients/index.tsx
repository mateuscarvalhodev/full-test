import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ClientCard from '@/components/ClientCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { getClients } from '@/api/getClients';
import { deleteClient } from '@/api/deleteClients';
import FormClient from '@/components/FormClient';
import { toast } from 'sonner';
import { Client } from '@/types/TClientCard';
import { Button } from '@/components/ui/button';
import { patchClient } from '@/api/editUser';

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [clientToEdit, setClientToEdit] = useState<Client | undefined>(undefined);

  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      const userId = Number(storedUserId);
      getClients(userId)
        .then((data: Client[]) => {
          setClients(data);
        })
        .catch((error) => console.error('Erro ao buscar clientes:', error))
        .finally(() => setIsLoading(false));
    } else {
      console.error('userId não encontrado.');
      setIsLoading(false);
    }
  }, []);

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const currentItems = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (clientId: number) => {
    deleteClient(clientId)
      .then(() => {
        console.log(`cliente ${clientId} deletado com sucesso.`);
        toast('Usuário deletado com sucesso.');
      })
      .catch((error) => {
        console.error('erro ao deletar o cliente: ', error);
      });
  };
  function handleAdd(client: Client) {
    const updatedClient = { ...client, isSelected: true };
    patchClient(updatedClient)
      .then((res) => {

        setClients((prev) =>
          prev.map((c) =>
            c.id === res.id ? res : c
          )
        );
      })
      .catch((err) => console.error('Erro ao atualizar cliente:', err));
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEditClick = (client: Client) => {
    setClientToEdit(client);
    setOpen(true);
  };

  const handleNewClientClick = () => {
    setClientToEdit(undefined);
    setOpen(true);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className='bg-slate-50 min-h-screen mt-24 border-2 w-screen'>
      <Header />

      <div className='flex justify-between items-center my-8'>
        <span>{clients.length} clientes encontrados</span>
        <div className='flex items-center gap-2'>
          <span>Clientes por página:</span>
          <select
            className='border p-1 rounded'
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>
      </div>

      <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {isLoading ? (
          <p>Carregando...</p>
        ) : clients.length === 0 ? (
          <p>Nenhum cliente encontrado.</p>
        ) : (
          currentItems.map((item) => (
            <ClientCard
              key={item.id}
              clientData={item}
              onDelete={() => handleDelete(item.id)}
              onAdd={handleAdd}
              onEdit={handleEditClick}
            />
          ))
        )}

        <Button
          onClick={handleNewClientClick}
          className='col-span-full w-full border-2 border-primary-orange hover:bg-white bg-white text-primary-orange cursor-pointer'
        >
          Adicionar Cliente
        </Button>

        <FormClient open={open} setOpen={setOpen} client={clientToEdit} />
      </main>

      {!isLoading && clients.length > 0 && (
        <Pagination className='mt-8'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
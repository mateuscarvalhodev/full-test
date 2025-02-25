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
import { Button } from '@/components/ui/button';
import { getClients } from '@/api/getClients';
import { TClientCards } from '@/types/TClientCard';
import { deleteClient } from '@/api/deleteClients';

export default function Clients() {
  const [clients, setClients] = useState<TClientCards[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getClients()
      .then((data: TClientCards[]) => {
        setClients(data);
      })
      .catch((error) => console.error('Erro ao buscar clientes:', error))
      .finally(() => setIsLoading(false));
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
      })
      .catch((error) => {
        console.error('erro ao deletar o cliente: ', error)
      })
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <main className="w-screen mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16">
        {isLoading ? (
          <p>Carregando...</p>
        ) : clients.length === 0 ? (
          <p>Nenhum cliente encontrado.</p>
        ) : (
          currentItems.map((item) => (
            <ClientCard
              key={item.id}
              id={item.id}
              name={item.name}
              salary={item.salary}
              enterprisePrice={item.enterprisePrice}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        )}
        {!isLoading && clients.length > 0 && (
          <Button className="col-span-full w-full border-2 border-amber-600 bg-white text-amber-600 cursor-pointer">
            Adicionar Cliente
          </Button>
        )}
      </main>
      {!isLoading && clients.length > 0 && (
        <Pagination>
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
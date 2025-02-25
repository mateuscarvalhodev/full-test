import { useState } from 'react';
import Header from '@/components/Header';
import ClientCard from '@/components/ui/ClientCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const cardsData = [
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
  { name: 'Mateus Carvalho Rodrigues', priceEnterprise: 120000, priceSalary: 3500 },
];

export default function Clients() {
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  const currentItems = cardsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <main className='w-screen bg-slate-50 mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16'>
        {currentItems.map((item, index) => (
          <ClientCard
            key={index}
            name={item.name}
            priceEnterprise={item.priceEnterprise}
            priceSalary={item.priceSalary}
          />
        ))}
      </main>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
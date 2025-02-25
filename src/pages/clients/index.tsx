import Header from "@/components/Header";
import ClientCard from "@/components/ui/ClientCard";

export default function Clients() {
  return (
    <>
      <Header />

      <main className='w-screen bg-slate-50 items-center mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16'>
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
        <ClientCard name='Mateus Carvalho Rodrigues' priceEnterprise={120000} priceSalary={3500} />
      </main>
    </>
  )
}
import teddyLogo from '@/assets/logo.svg'
import { SidebarTrigger } from '../ui/sidebar';

export default function Header() {
  console.log(SidebarTrigger);
  return (
    <header className='fixed top-0 left-0 w-full bg-white z-10 flex items-center justify-between px-4 py-2 border-b'>
      <div className='flex items-center gap-4'>
        <button className='p-2 text-gray-600 hover:text-gray-800'>
          <SidebarTrigger />


        </button>
        <div className='flex items-center space-x-2'>
          <img
            src={teddyLogo}
            alt='Teddy Logo'
            className='w-32 h-32'
          />
        </div>
      </div>

      <nav className='flex items-center gap-8'>
        <a
          href='#'
          className='transition-colors'
        >
          Clientes
        </a>
        <a
          href='#'
          className='transition-colors'
        >
          Itens selecionados
        </a>
        <a
          href='#'
          className='transition-colors'
        >
          Sair
        </a>
      </nav>

      <div className='text-gray-700'>Olá Usuário</div>
    </header>
  )
}
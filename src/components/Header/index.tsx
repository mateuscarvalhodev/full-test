import teddyLogo from '@/assets/logo.svg';
import { SidebarTrigger } from '../ui/sidebar';
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';

export default function Header() {
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUser(storedName);
    }
  }, []);

  return (
    <header className='w-full bg-white border-b'>
      <div className='max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex w-full md:w-auto items-center justify-between'>
          <button className='p-2 text-4xl text-gray-600 hover:text-gray-800'>
            <SidebarTrigger />
          </button>
          <div className='flex items-center space-x-2'>
            <img
              src={teddyLogo}
              alt='Teddy Logo'
              className='w-24 h-24 md:w-32 md:h-32'
            />
          </div>
        </div>

        <nav className='flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0'>
          <NavLink
            to='/clientes'
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'underline text-primary-orange' : 'text-gray-600'} hover:text-primary-orange hover:underline`
            }
          >
            Clientes
          </NavLink>
          <NavLink
            to='/clientes-selecionados'
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'underline text-primary-orange' : 'text-gray-600'} hover:text-primary-orange hover:underline`
            }
          >
            Clientes selecionados
          </NavLink>
          <NavLink
            to='/'
            onClick={() => localStorage.clear()}
            className='transition-colors text-gray-600 hover:text-primary-orange hover:underline'
          >
            Sair
          </NavLink>
        </nav>

        <div className='text-gray-700 mt-2 md:mt-0'>
          Olá, <span className='font-bold capitalize'>{user}!</span>
        </div>
      </div>
    </header>
  );
}
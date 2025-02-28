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
    <header className='w-full bg-white h-32 flex items-center justify-between px-4 py-2 border-b'>
      <div className='flex items-center gap-4'>
        <button className='p-2 text-4xl text-gray-600 hover:text-gray-800'>
          <SidebarTrigger />
        </button>
        <div className='flex items-center space-x-2'>
          <img src={teddyLogo} alt='Teddy Logo' className='w-32 h-32' />
        </div>
      </div>

      <nav className='flex items-center gap-8'>
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

      <div className='text-gray-700'>
        Olá, <span className='font-bold capitalize'>{user}!</span>
      </div>
    </header>
  );
}
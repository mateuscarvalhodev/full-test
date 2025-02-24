
import { useState } from 'react';
import './App.css'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import ClientCard from './components/ui/ClientCard';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Bem-vindo, ${name}!`);
  };
  return (
    <>

      <div className='flex items-center justify-center h-screen '>
        <div className=' rounded-lg w-96'>
          <h2 className='text-2xl font-semibold text-center mb-4'>Olá, seja bem-vindo!</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='Digite o seu nome:'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border rounded mb-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-orange-500'
            />
            <Button
              type='submit'
              className='w-full xg text-white bg--primary-orange font-bold py-2 px-4 rounded transition'
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
      <ClientCard name='mateus carvalho rodrigues' priceEnterprise={120000} priceSalary={3500} />
    </>
  )
}

export default App

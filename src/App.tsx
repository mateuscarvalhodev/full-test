import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { authenticateUser } from './api/authUser';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

function App() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      toast('Por favor, digite seu nome.');
      return;
    }
    try {
      const user = await authenticateUser({ name });
      toast(`Bem-vindo, ${user.name}!`);
      localStorage.setItem('userId', (user.id));
      localStorage.setItem('userName', user.name);
      navigate('/clientes');
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      toast(`Erro ao entrar. Por favor, tente novamente. ${error}`);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='rounded-lg w-96'>
        <h2 className='text-2xl font-semibold text-center mb-4'>
          Olá, seja bem-vindo!
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Digite o seu nome:'
            value={name}
            onChange={(e) =>
              setName(
                e.target.value.replace(/\b\w/g, (char) => char.toUpperCase())
              )
            }
            className='w-full p-2 border bg-background-basic rounded mb-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-primary-orange'
          />
          <Button
            type='submit'
            className='w-full text-white bg-primary-orange hover:bg-primary-orange font-bold py-2 px-4 rounded transition cursor-pointer'
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;

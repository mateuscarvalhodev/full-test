import axios from 'axios';
import { TClientCards, TNewClient } from '@/types/TClientCard';

export async function createClient(newClient: TNewClient): Promise<TClientCards> {
  try {
    const response = await axios.post('http://localhost:3000/clients', newClient);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
}
import axios from 'axios';
import { Client, TNewClient } from '@/types/TClientCard';

export async function createClient(newClient: TNewClient): Promise<Client> {
  try {
    const response = await axios.post('http://localhost:3000/clients', newClient);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
}
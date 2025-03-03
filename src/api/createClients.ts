import axios from 'axios';
import { Client, TNewClient } from '@/types/TClientCard';
import { baseUrl } from '@/lib/utils';

export async function createClient(newClient: TNewClient): Promise<Client> {
  try {
    const response = await axios.post(`${baseUrl}/clients`, newClient);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
}
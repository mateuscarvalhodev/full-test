import axios from 'axios';
import { Client } from '@/types/TClientCard';
import { baseUrl } from '@/lib/utils';

export async function patchClient(updatedClient: Client): Promise<Client> {
  try {
    const storedUserId = localStorage.getItem('userId');
    const userId = storedUserId ? Number(storedUserId) : undefined;

    const payload = { ...updatedClient, userId };

    const response = await axios.patch(`${baseUrl}/clients/${updatedClient.id}`, payload);
    // const response = await axios.patch(`http://localhost:3000/clients/${updatedClient.id}`, payload);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error;
  }
}
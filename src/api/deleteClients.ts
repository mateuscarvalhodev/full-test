import { baseUrl } from '@/lib/utils';
import axios from 'axios';

export async function deleteClient(id: number) {
  try {
    const response = await axios.delete(`${baseUrl}/clients/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar cliente com id ${id}`, error);
    throw error;
  }
}
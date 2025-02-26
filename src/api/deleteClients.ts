import axios from 'axios';

export async function deleteClient(id: number) {
  try {
    const response = await axios.delete(`http://localhost:3000/clients/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar cliente com id ${id}`, error);
    throw error;
  }
}
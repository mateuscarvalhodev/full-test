import axios from 'axios';

export async function getClients(userId: number) {
  try {
    const response = await axios.get(`http://localhost:3000/clients?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}
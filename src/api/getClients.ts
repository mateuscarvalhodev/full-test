import axios from 'axios';

export async function getClients() {
  try {
    const response = await axios.get('http://localhost:3000/clients');
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}
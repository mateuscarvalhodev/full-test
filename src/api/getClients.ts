import axios from 'axios';

export async function getClientes() {
  try {
    const response = await axios.get('http://localhost:3000/clients');
    console.log('Dados recebidos:', response.data);
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}

getClientes();
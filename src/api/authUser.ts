import { baseUrl } from '@/lib/utils';
import axios from 'axios';

type TUserAuthPayload = {
  name: string;
};

export async function authenticateUser(payload: TUserAuthPayload) {
  try {
    const response = await axios.post(`${baseUrl}/users`, payload);
    return response.data;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    throw error;
  }
}
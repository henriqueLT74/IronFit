import { api } from './api';

export interface AuthResponse {
  token: string;
}

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', { email, password });
  if (response.data.token) {
    localStorage.setItem('ironfit_token', response.data.token);
  }
  return response.data;
};

export const registerUser = async (email: string, password: string, role = 'USER') => {
  return await api.post('/auth/register', { email, password, role });
};

export const logoutUser = () => {
  localStorage.removeItem('ironfit_token');
};
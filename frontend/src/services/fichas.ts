import { api } from './api';

export interface Exercicio {
  nome: string;
  series: number;
  repeticoes: number;
  carga: string;
  observacao?: string;
}

export interface FichaDeTreino {
  id?: string;
  nome: string;
  exercicios: Exercicio[];
}

export async function getFichas(): Promise<FichaDeTreino[]> {
  const response = await api.get<FichaDeTreino[]>('/fichas');
  return response.data;
}

export async function createFicha(ficha: FichaDeTreino): Promise<FichaDeTreino> {
  const response = await api.post<FichaDeTreino>('/fichas', ficha);
  return response.data;
}

export async function deleteFicha(id: string): Promise<void> {
  await api.delete(`/fichas/${id}`);
}
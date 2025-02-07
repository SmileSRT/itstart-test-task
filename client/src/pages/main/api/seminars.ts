import { apiClient } from '@/shared/api/api-client';
import type { ISeminar } from '../types';

export const fetchSeminarsList = async () => {
  return await apiClient.get<ISeminar[]>('/seminars');
};

export const deleteSeminar = async (id: number) => {
  return await apiClient.remove<ISeminar>(`/seminars/${id}`);
};

import { apiClient } from '@/shared/api/api-client';
import type { ISeminar } from '../types';

export const fetchSeminarsList = async () => {
  return await apiClient.get<ISeminar[]>('/seminars');
};

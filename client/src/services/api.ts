import axios from 'axios';
import type { Student, ApiResponse, LoginResponse } from '../types/student';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerStudent = async (studentData: Student): Promise<ApiResponse<Student>> => {
  const response = await api.post<ApiResponse<Student>>('/register', studentData);
  return response.data;
};

export const loginStudent = async (credentials: Pick<Student, 'email' | 'password'>): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', credentials);
  return response.data;
};

export const getStudents = async (): Promise<ApiResponse<Student>> => {
  const response = await api.get<ApiResponse<Student>>('/students');
  return response.data;
};

export const updateStudent = async (id: string, studentData: Student): Promise<ApiResponse<Student>> => {
  const response = await api.put<ApiResponse<Student>>(`/student/${id}`, studentData);
  return response.data;
};

export const deleteStudent = async (id: string): Promise<ApiResponse<Student>> => {
  const response = await api.delete<ApiResponse<Student>>(`/student/${id}`);
  return response.data;
};

export default api;

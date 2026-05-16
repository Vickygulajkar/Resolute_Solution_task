import axios from 'axios';
import type { Student, ApiResponse, LoginResponse } from '../types/student';
import { encryptObject, decryptObject } from '../utils/crypto';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerStudent = async (studentData: Student): Promise<ApiResponse<Student>> => {
  // Encrypt data before sending
  const encryptedData = encryptObject(studentData);
  const response = await api.post<ApiResponse<Student>>('/register', encryptedData);
  
  // The response might contain encrypted student data that needs decryption
  if (response.data.student) {
    response.data.student = decryptObject(response.data.student);
  }
  return response.data;
};

export const loginStudent = async (credentials: Pick<Student, 'email' | 'password'>): Promise<LoginResponse> => {
  // Usually login credentials are not encrypted at the application level in the same way,
  // but let's follow the requirement if it implies all data.
  // However, the example payload for login shows plain email/password.
  // Let's keep it simple for login as per the example.
  const response = await api.post<LoginResponse>('/login', credentials);
  return response.data;
};

export const getStudents = async (): Promise<ApiResponse<Student>> => {
  const response = await api.get<ApiResponse<Student>>('/students');
  
  // Decrypt each student in the list
  if (response.data.students) {
    response.data.students = response.data.students.map(student => decryptObject(student));
  }
  return response.data;
};

export const updateStudent = async (id: string, studentData: Student): Promise<ApiResponse<Student>> => {
  const encryptedData = encryptObject(studentData);
  const response = await api.put<ApiResponse<Student>>(`/student/${id}`, encryptedData);
  
  if (response.data.updatedStudent) {
    response.data.updatedStudent = decryptObject(response.data.updatedStudent);
  }
  return response.data;
};

export const deleteStudent = async (id: string): Promise<ApiResponse<Student>> => {
  const response = await api.delete<ApiResponse<Student>>(`/student/${id}`);
  return response.data;
};

export default api;

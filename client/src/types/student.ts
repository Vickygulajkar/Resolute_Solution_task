export interface Student {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  course: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  student?: T;
  students?: T[];
  updatedStudent?: T;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  student: {
    _id: string;
    fullName: string;
    email: string;
  };
}

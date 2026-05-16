# Student Management System

A full-stack application for managing student records, built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Student Management**: Full CRUD operations (Create, Read, Update, Delete) for student records.
- **Authentication**: Secure login and registration system using JWT (JSON Web Tokens).
- **Protected Routes**: Client-side routing with access control for authenticated users.
- **Data Security**: Password hashing with Bcrypt and data encryption/decryption using Crypto-js.
- **Responsive UI**: Modern and clean user interface built with Tailwind CSS.

## 🛠️ Tech Stack

### Frontend (Client)
- **React 19**: Modern UI library with Hooks.
- **Vite**: Ultra-fast build tool and development server.
- **TypeScript**: Static typing for better developer experience and code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for API requests.

### Backend (Server)
- **Node.js**: JavaScript runtime environment.
- **Express 5**: Fast, unopinionated, minimalist web framework.
- **TypeScript**: Type-safe backend development.
- **MongoDB & Mongoose**: NoSQL database and object modeling tool.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **Bcryptjs**: For hashing passwords.

## 📁 Project Structure

```text
Resolute_Solution/
├── client/                # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── services/      # API services (Axios)
│   │   ├── types/         # TypeScript interfaces/types
│   │   └── utils/         # Helper functions (Crypto)
│   └── package.json
└── server/                # Express backend (Node.js)
    ├── src/
    │   ├── config/        # Database configuration
    │   ├── controllers/   # Request handlers
    │   ├── models/        # Mongoose schemas
    │   ├── routes/        # API endpoints
    │   └── utils/         # Helper functions
    └── package.json
```

## ⚙️ Setup and Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### 1. Clone the repository
```bash
git clone <repository-url>
cd Resolute_Solution
```

### 2. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` root and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_encryption_secret
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

### Server
- `npm run dev`: Starts the backend server with `ts-node-dev` (auto-reloads on changes).

### Client
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.

## 🛡️ Security
- **Passwords**: Hashed using `bcryptjs` before being stored in the database.
- **API Access**: Protected by JWT authentication middleware.
- **Data Integrity**: Sensitive data is encrypted using `crypto-js` where necessary.

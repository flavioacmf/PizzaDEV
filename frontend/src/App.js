import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/clientes"
                    element={
                        <ProtectedRoute>
                            <h1>Gerenciar Clientes</h1>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/categorias"
                    element={
                        <ProtectedRoute>
                            <h1>Gerenciar Categorias</h1>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/produtos"
                    element={
                        <ProtectedRoute>
                            <h1>Gerenciar Produtos</h1>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/pedidos"
                    element={
                        <ProtectedRoute>
                            <h1>Gerenciar Pedidos</h1>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

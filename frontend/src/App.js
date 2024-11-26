import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Clientes from './pages/Clientes';
import Categorias from './pages/Categorias';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Cadastros from './pages/Cadastros';

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
                    path="/cadastros"
                    element={
                        <ProtectedRoute>
                             <Cadastros />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/clientes"
                    element={
                        <ProtectedRoute>
                            <Clientes />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/categorias"
                    element={
                        <ProtectedRoute>
                            <Categorias />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/produtos"
                    element={
                        <ProtectedRoute>
                            <Produtos />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/pedidos"
                    element={
                        <ProtectedRoute>
                            <Pedidos />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

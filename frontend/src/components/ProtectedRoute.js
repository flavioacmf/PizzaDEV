import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Verifica se o token está presente

    if (!token) {
        return <Navigate to="/" />; // Redireciona para o login se não houver token
    }

    return children; // Renderiza o componente filho se autenticado
};

export default ProtectedRoute;

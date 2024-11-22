import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove o token
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bem-vindo ao painel de administração!</p>
            <div>
                <button onClick={() => navigate('/clientes')}>Gerenciar Clientes</button>
                <button onClick={() => navigate('/categorias')}>Gerenciar Categorias</button>
                <button onClick={() => navigate('/produtos')}>Gerenciar Produtos</button>
                <button onClick={() => navigate('/pedidos')}>Gerenciar Pedidos</button>
            </div>
            <button onClick={handleLogout} style={{ marginTop: '20px', color: 'red' }}>
                Sair
            </button>
        </div>
    );
};

export default Dashboard;

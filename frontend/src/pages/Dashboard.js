import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CadastrosModal from '../components/CadastrosModal'; // Importa o modal
import '../styles/Dashboard.css'; // Importa os estilos atualizados

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove o token
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <div className="dashboard">
            {/* Menu lateral */}
            <div className="sidebar">
                <button className="menu-item" onClick={() => setIsModalOpen(true)}>Cadastros</button>
                <button className="menu-item" onClick={() => navigate('/pedidos')}>Pedidos</button>
                <button className="menu-item" onClick={() => navigate('/docs-fiscais')}>Docs. Fiscais</button>
                <button className="menu-item" onClick={() => navigate('/relatorios')}>Relatórios</button>
                <button className="menu-item" onClick={() => navigate('/configuracoes')}>Configurações</button>
                <button className="menu-item" onClick={() => navigate('/suporte')}>Suporte</button>

                {/* Botão de logout no final */}
                <button className="menu-item logout-button" onClick={handleLogout}>Sair</button>
            </div>

            {/* Conteúdo principal */}
            <div className="main-content">
                <div className="logo">
                    <img src="/pizza_logo.png" alt="Pizza Dev" className="logo-image" />
                    <div className="splashes"></div>
                </div>
            </div>

            {/* Modal de Cadastros */}
            {isModalOpen && <CadastrosModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Dashboard;

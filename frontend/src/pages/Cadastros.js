import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastros.css'; // Arquivo CSS para estilização

const Cadastros = () => {
    const navigate = useNavigate();

    return (
        <div className="cadastros-container">
            <h1>Selecione um Cadastro</h1>
            <div className="cadastros-options">
                <button onClick={() => navigate('/categorias')} className="cadastro-button">
                    Categorias
                </button>
                <button onClick={() => navigate('/subcategorias')} className="cadastro-button">
                    Subcategorias
                </button>
                <button onClick={() => navigate('/produtos')} className="cadastro-button">
                    Produtos
                </button>
                <button onClick={() => navigate('/clientes')} className="cadastro-button">
                    Clientes
                </button>
            </div>
        </div>
    );
};

export default Cadastros;

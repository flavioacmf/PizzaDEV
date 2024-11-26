import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CadastrosModal.css'; // Arquivo CSS para estilização do modal

const CadastrosModal = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Selecione um Cadastro</h2>
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
                <button onClick={onClose} className="close-button">Voltar</button>
            </div>
        </div>
    );
};

export default CadastrosModal;

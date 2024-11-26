import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Clientes.css';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();

    // Buscar clientes ao carregar a página
    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };
        fetchClientes();
    }, []);

    // Função para excluir cliente
    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            try {
                await api.delete(`/clientes/${id}`);
                setClientes(clientes.filter(cliente => cliente.codigo !== id));
            } catch (error) {
                console.error('Erro ao excluir cliente:', error);
            }
        }
    };

    return (
        <div className="clientes-container">
            <h1>Gerenciar Clientes</h1>
            <button className="add-button" onClick={() => navigate('/clientes/adicionar')}>Adicionar Cliente</button>
            <table className="clientes-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF/CNPJ</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.codigo}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf_cnpj}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <button onClick={() => navigate(`/clientes/editar/${cliente.codigo}`)}>Editar</button>
                                <button onClick={() => handleDelete(cliente.codigo)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Clientes;

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Pedidos.css';

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const navigate = useNavigate();

    // Buscar pedidos ao carregar a página
    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await api.get('/pedidos');
                setPedidos(response.data);
            } catch (error) {
                console.error('Erro ao buscar pedidos:', error);
            }
        };
        fetchPedidos();
    }, []);

    // Função para alterar o status do pedido
    const handleStatusUpdate = async (id, novoStatus) => {
        try {
            await api.put(`/pedidos/${id}`, { status: novoStatus });
            setPedidos(
                pedidos.map((pedido) =>
                    pedido.numero_pedido === id ? { ...pedido, status: novoStatus } : pedido
                )
            );
        } catch (error) {
            console.error('Erro ao atualizar status do pedido:', error);
        }
    };

    return (
        <div className="pedidos-container">
            <h1>Gerenciar Pedidos</h1>
            <table className="pedidos-table">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Total</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                        <tr key={pedido.numero_pedido}>
                            <td>{pedido.cliente_nome}</td>
                            <td>R$ {pedido.total.toFixed(2)}</td>
                            <td>{new Date(pedido.data_pedido).toLocaleDateString()}</td>
                            <td>{pedido.status}</td>
                            <td>
                                <button onClick={() => navigate(`/pedidos/detalhes/${pedido.numero_pedido}`)}>Detalhes</button>
                                <button onClick={() => handleStatusUpdate(pedido.numero_pedido, 'Concluído')}>Concluir</button>
                                <button onClick={() => handleStatusUpdate(pedido.numero_pedido, 'Cancelado')}>Cancelar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pedidos;

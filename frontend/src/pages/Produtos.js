import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Produtos.css';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    // Buscar produtos ao carregar a página
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await api.get('/produtos');
                setProdutos(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };
        fetchProdutos();
    }, []);

    // Função para excluir produto
    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
            try {
                await api.delete(`/produtos/${id}`);
                setProdutos(produtos.filter(produto => produto.codigo !== id));
            } catch (error) {
                console.error('Erro ao excluir produto:', error);
            }
        }
    };

    return (
        <div className="produtos-container">
            <h1>Gerenciar Produtos</h1>
            <button className="add-button" onClick={() => navigate('/produtos/adicionar')}>Adicionar Produto</button>
            <table className="produtos-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Subcategoria</th>
                        <th>Preço</th>
                        <th>Tamanho</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.codigo}>
                            <td>{produto.nome}</td>
                            <td>{produto.categoria_nome || 'Sem Categoria'}</td>
                            <td>{produto.subcategoria_nome || 'Sem Subcategoria'}</td>
                            <td>R$ {produto.preco.toFixed(2)}</td>
                            <td>{produto.tamanho || 'N/A'}</td>
                            <td>
                                <button onClick={() => navigate(`/produtos/editar/${produto.codigo}`)}>Editar</button>
                                <button onClick={() => handleDelete(produto.codigo)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Produtos;

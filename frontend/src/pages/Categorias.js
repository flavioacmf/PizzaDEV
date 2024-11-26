import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Categorias.css';

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaAtiva, setCategoriaAtiva] = useState(null); // Categoria ativa
    const navigate = useNavigate();

    // Buscar categorias ao carregar a página
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await api.get('/categorias'); // Endpoint da sua API
                setCategorias(response.data);

                // Seleciona a primeira categoria ativa
                const primeiraAtiva = response.data.find(cat => cat.ativo);
                if (primeiraAtiva) {
                    setCategoriaAtiva(primeiraAtiva);
                }
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        fetchCategorias();
    }, []);

    return (
        <div className="categorias-page">
            {/* Botão de fechar */}
            <button className="close-button" onClick={() => navigate(-1)}>X</button>

            {/* Título */}
            <h1 className="titulo-categorias">Gerenciar Categorias</h1>

            {/* Categoria ativa */}
            {categoriaAtiva ? (
                <div className="categoria-ativa">
                    <h2>Categoria Ativa</h2>
                    <div><strong>Código:</strong> {categoriaAtiva.codigo}</div>
                    <div><strong>Nome:</strong> {categoriaAtiva.nome}</div>
                    <div><strong>Descrição:</strong> {categoriaAtiva.descricao || 'Sem descrição disponível'}</div>
                </div>
            ) : (
                <p>Nenhuma categoria ativa encontrada.</p>
            )}

            {/* Lista de todas as categorias */}
            <div className="categorias-lista">
                <h2>Todas as Categorias</h2>
                {categorias.map((categoria) => (
                    <div key={categoria.codigo} className="categoria-item">
                        <div><strong>Código:</strong> {categoria.codigo}</div>
                        <div><strong>Nome:</strong> {categoria.nome}</div>
                        <div><strong>Descrição:</strong> {categoria.descricao || 'Sem descrição disponível'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categorias;

import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 

const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { nome, senha });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard'); // Redirecionar para o dashboard
        } catch (err) {
            setError(err.response?.data?.error || 'Erro ao fazer login');
        }
    };

    return (
        <div className="login-container">
            <div className="left">
                <img src="/pizza_logo2.png" alt="Pizza Dev" />
                <h1>Login</h1>
            </div>
            <div className="right">
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Usuário"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button className="login-button" onClick={handleLogin}>
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Login;
	
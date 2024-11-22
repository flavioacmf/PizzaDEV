import axios from 'axios';

// Configuração da instância Axios
const api = axios.create({
    baseURL: 'http://localhost:3000', // URL base do backend
});

export default api;

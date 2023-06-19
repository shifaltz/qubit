import axios from 'axios';

const api = axios.create({
    baseURL: 'https://qubitrevendas.com.br/api/'
    
});

export default api;
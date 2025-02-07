import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exchangerate-api.com/v4/latest/USD', // URL base de la API
});

export default api;

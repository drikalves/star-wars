import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi-trybe.herokuapp.com',
});

export default api;

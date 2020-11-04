import axios from 'axios';

const api = axios.create({
    baseURL: 'https://agenda-cultural-vilhena.herokuapp.com/',
});



export default api;
import axios from 'axios'
axios.defaults.withCredentials = true
const api = axios.create({
    baseURL: 'https://agenda-cultural-vilhena.herokuapp.com/',
});


export default api;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-40e28.firebaseio.com/'
});

export default instance;

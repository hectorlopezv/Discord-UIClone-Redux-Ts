import axios from 'axios';

const instance_discord = axios.create({
    baseURL: 'http://[::1]:8000'
});

export default instance_discord;
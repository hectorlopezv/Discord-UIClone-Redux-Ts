import axios from 'axios';

const instance_discord = axios.create({
    baseURL: 'https://discordnodeexpressjs.herokuapp.com/'
});

export default instance_discord;
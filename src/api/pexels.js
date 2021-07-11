import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: '563492ad6f91700001000001b8b81ac812fb43ea914441df02bd0fcd'
    }
});

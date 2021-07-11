import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PQyuOpAb3aMvDo2D-1gEzX5JxPuuLLeGIuiYV63cmOw'
    }
});

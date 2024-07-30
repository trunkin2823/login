import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/login',
    timeout: 10000, // Timeout 10 giây
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;

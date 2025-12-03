import axios from 'axios';
 
const API_BASE_URL = 'http://mobile.uvers.ac.id/api';
 
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

 // Example API call 
export const fetchCategories = async () => {
    const response = await api.get('/categories');
 
    if (response.status !== 200) {
        throw new Error('Failed to fetch categories');
    }
 
    return response.data;
};

export default api;
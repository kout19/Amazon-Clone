import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-e96c9/us-central1/api' // THE API (cloud function) URL
});

export {axiosInstance};
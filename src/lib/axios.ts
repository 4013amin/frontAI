import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  // baseURL: 'https://aiwriterproject-production.up.railway.app/api',
  timeout: 10000, // 10 ثانیه
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default API
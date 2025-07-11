import axios from 'axios';

const API = axios.create({
  baseURL: 'https://aiwriterproject-production.up.railway.app/api',
  timeout: 10000, // 10 ثانیه
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default API
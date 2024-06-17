import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'https://dev-api.nurture.vinova.sg/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (response) {
    return response;
  },
  async function (error) {
    // if (error.config.url.includes('refresh-access-token')) {
    //   return Promise.reject(error);
    // }
    const navigate = useNavigate();
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      navigate('/login');
    }
  },
);

export default instance;

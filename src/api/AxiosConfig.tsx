import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev-api.nurture.vinova.sg/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    console.log(error.response);
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username');

      window.location.href = '/login';
    }
  },
);

export default instance;

import axios from 'axios';

export const setTokenHeader = token => (
  token
      ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      : delete axios.defaults.headers.common['Authorization']
);

export const apiCall = (method, path, data) => (
    new Promise((resolve, reject) => (
        axios[method.toLowerCase()])(path, data)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response.data.error))
    )
);

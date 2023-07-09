import axios, { CanceledError } from 'axios';
const { VITE_RAWG_API_BASE_URL, VITE_RAWG_API_KEY } = import.meta.env;

export default axios.create({
  baseURL: VITE_RAWG_API_BASE_URL,
  params: {
    key: VITE_RAWG_API_KEY
  },
  paramsSerializer: {
    indexes: null
  }
});

export { CanceledError };

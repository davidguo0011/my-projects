import axios from 'axios';
import config from '../config/config';

export const login = async (data) => {
  const path = `${config.apiAddress}/auth/login`;
  const response = await axios.post(path, data);
  return response;
};

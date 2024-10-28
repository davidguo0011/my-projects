import axios from 'axios';
import config from '../config/config';
export const signup = async (data) => {
  const path = `${config.apiAddress}/auth/register`;
  const response = await axios.post(path, data);
  return response;
};

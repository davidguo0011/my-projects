import axios from 'axios';
import config from '../config/config';

export const executePythonCode = async (data) => {
  const path = `${config.apiAddress}/execute/python/basic`;
  const response = await axios.post(path, data);
  return response;
};

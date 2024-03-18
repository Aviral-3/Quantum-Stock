import axios from 'axios';
const API_URL = '/api/users/';

const getUserProfile = async () => {
  const response = await axios.get(`${API_URL}profile`);
  return response.data;
};

export default {
  getUserProfile,
};

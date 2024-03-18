import axios from 'axios';

const getStockData = async (symbol) => {
  const response = await axios.get(`/api/stocks/${symbol}`);
  return response.data;
};

export default {
  getStockData,
};

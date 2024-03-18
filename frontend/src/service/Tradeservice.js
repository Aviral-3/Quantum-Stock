import axios from 'axios';

const API_URL = '/api/trades/';

const executeTrade = async (tradeData) => {
  const response = await axios.post(API_URL, tradeData);
  return response.data;
};

const getTradeHistory = async () => {
  const response = await axios.get(`${API_URL}history`);
  return response.data;
};

export default {
  executeTrade,
  getTradeHistory,
};

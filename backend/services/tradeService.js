const Trade = require('../models/tradeModel');

const executeTrade = async (tradeData) => {
  const { userId, symbol, quantity, price, tradeType } = tradeData;
  
  const trade = await Trade.create({
    userId,
    symbol,
    quantity,
    price,
    tradeType,
  });

  return trade;
};


module.exports = {
  executeTrade,
};

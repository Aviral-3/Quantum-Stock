import React, { useState } from 'react';

const StockViewer = () => {
  const [symbol, setSymbol] = useState('');


  return (
    <div>
      <h2>Stock Viewer</h2>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      {/* Display stock data here */}
    </div>
  );
};

export default StockViewer;

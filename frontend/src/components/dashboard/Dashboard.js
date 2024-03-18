import React from 'react';
import Portfolio from './Portfolio';
import TradeHistory from './TradeHistory';
import StockViewer from './StockViewer';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Portfolio />
      <TradeHistory />
      <StockViewer />
    </div>
  );
};

export default Dashboard;

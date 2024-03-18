# QUANTUM STOCK

## Overview

This trading platform is a simplified full-stack web application designed to allow users to register, view real-time stock data, execute trades, manage their portfolios, and review their order history, including profit and loss calculations. It features a separate administrative interface for managing and viewing registered users.

## Features

- **User Registration**: Secure signup and login functionality for traders.
- **Real-Time Stock Data**: Users can view real-time data for stocks.
- **Trade Execution**: Traders can execute buy and sell orders.
- **Portfolio Management**: Users can view their current holdings and performance.
- **Order History with P&L**: Users and admins can review order history along with profit and loss details.
- **Admin Dashboard**: Administrators can manage user accounts and view aggregate trading data.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js with Express.js
- **Databases**: MongoDB for user and trade data; InfluxDB for storing time-series stock data.
- **API Integration**: Integration with stock market APIs for real-time data.

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- InfluxDB

### Backend Setup

1. Clone the repository and navigate to the backend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a .env file in the backend directory and add the following:
   ```bash
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STOCK_API_KEY=your_stock_api_key
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Frontend Setup
Navigate to the frontend directory.
1. Install dependencies:
```bash
npm install
```
2. Start the React application:
```bash
npm start
```

The application should now be running on http://localhost:3000.


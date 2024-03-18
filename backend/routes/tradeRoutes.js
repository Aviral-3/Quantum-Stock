const express = require('express');
const router = express.Router();
const { executeTrade, viewPortfolio, getTradeHistory } = require('../controllers/tradeController');

const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, executeTrade);
router.get('/portfolio', protect, viewPortfolio);
router.get('/history', protect, getTradeHistory);

module.exports = router;

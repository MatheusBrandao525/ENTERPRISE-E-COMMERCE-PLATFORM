const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/products', require('./src/routes/productRoutes'));
app.use('/api/orders', require('./src/routes/orderRoutes'));
app.use('/api/vendors', require('./src/routes/vendorRoutes'));

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Enterprise Backend' });
});

// Mock Database Connection Log
console.log('🔌 Connecting to PostgreSQL (Simulated)...');
setTimeout(() => {
    console.log('✅ Connected to PostgreSQL');
    console.log('🔌 Connecting to Redis (Simulated)...');
    setTimeout(() => {
        console.log('✅ Connected to Redis Cache');
    }, 500);
}, 500);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

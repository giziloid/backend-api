require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const contributeRoutes = require('./routes/contribute');
const activityRoutes = require('./routes/activity');

const app = express();
const port = process.env.PORT || 5423;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/contributes', contributeRoutes);
app.use('/api/activities', activityRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
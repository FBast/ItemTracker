const express = require('express');
const cors = require('cors');
const itemRoutes = require('./api/routes/itemRoutes');
const loanRoutes = require('./api/routes/loanRoutes');
const userRoutes = require('./api/routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/items', itemRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

module.exports = app;

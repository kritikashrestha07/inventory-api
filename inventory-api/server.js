const express = require('express');
const app = express();

const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());

app.use('/api', itemRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
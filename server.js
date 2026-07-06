const express = require('express');
const mockdat = require('./data');

const app = express();
const PORT = 3000;

// Home page
app.get('/', (req, res) => {
    res.send('Hello! My Node.js server is running!');
});

// API endpoint
app.get('/api/users', (req, res) => {
    res.json(mockdat);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`);
});
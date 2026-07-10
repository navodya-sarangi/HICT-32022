const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'Harry Potter' },
    { id: 2, title: 'Lord of the Rings' }
];

// Home page
app.get('/api/books', (req, res) => {
    res.json(books);
});

// API endpoint
app.post('/api/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.send("Book added successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
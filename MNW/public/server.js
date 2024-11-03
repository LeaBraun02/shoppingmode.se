const express = require('express');
const path = require('path');
const app = express();

// Dummy data
const products = [
    { name: 'Blus 1', price: '100 SEK' },
    { name: 'Blus 2', price: '150 SEK' }
];

app.use(express.static(path.join(__dirname, 'public'))); // Sätt upp en statisk filserver

app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.json(filteredProducts);
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


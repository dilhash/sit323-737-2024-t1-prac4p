const express = require('express');
const app = express();

app.use(express.json());


// API for the Addition
app.post('/api/add', (req, res) => {
    const { inputnum1, inputnum2 } = req.body;
    const result = inputnum1 + inputnum2;
    res.json({ result });
});

// Implement other endpoints similarly for subtraction, multiplication, and division

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json());


// check if the given input is a number
function isValidNumber(num) {
    return !isNaN(num);
}

//Addition
function handleAddition(req, res) {
    const { inputnum1, inputnum2 } = req.body;
    
    
    if (!isValidNumber(inputnum1) || !isValidNumber(inputnum2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    // Perform addition if input numbers are valid
    //parseFloat is used to ensure that the input values are treated as numbers and not strings
    const result = parseFloat(inputnum1) + parseFloat(inputnum2);
    res.json({ result });
}

// API for the Addition
app.post('/api/add', handleAddition);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

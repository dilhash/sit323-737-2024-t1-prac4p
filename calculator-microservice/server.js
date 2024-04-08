const express = require("express");
const app = express();

app.use(express.json());

// Validation function
function validateInput(req, res, next) {
  const { inputnum1, inputnum2 } = req.body;

  // Check if num1 and num2 are not null or empty
  if (
    inputnum1 === undefined ||
    inputnum2 === undefined ||
    inputnum1 === "" ||
    inputnum2 === ""
  ) {
    return res.status(400).json({ error: "Both numbers are required." });
  }

  // Check if num1 and num2 are numbers
  if (isNaN(inputnum1) || isNaN(inputnum2)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide valid numbers." });
  }

  // If input is valid, proceed to the next middleware/route handler
  next();
}

// Function for addition
function fnaddition(req, res) {
  const { inputnum1, inputnum2 } = req.body;
  const result = parseFloat(inputnum1) + parseFloat(inputnum2);
  res.json({ result });
}

// Function for subtraction
function fnsubtraction(req, res) {
  const { inputnum1, inputnum2 } = req.body;
  const result = parseFloat(inputnum1) - parseFloat(inputnum2);
  res.json({ result });
}

// Function for multiplication
function fnmultiplication(req, res) {
  const { inputnum1, inputnum2 } = req.body;
  const result = parseFloat(inputnum1) * parseFloat(inputnum2);
  res.json({ result });
}

// Function for division
function fndivision(req, res) {
  const { inputnum1, inputnum2 } = req.body;
  const result = parseFloat(inputnum1) / parseFloat(inputnum2);
  res.json({ result });
}

// API endpoints with middleware for input validation
app.post("/api/add", validateInput, fnaddition);
app.post("/api/substract", validateInput, fnsubtraction);
app.post("/api/multipy", validateInput, fnmultiplication);
app.post("/api/divide", validateInput, fndivision);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

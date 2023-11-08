const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check if a string is a palindrome
app.get('/palindrome', (req, res) => {
  const input = req.query.input;
  const isPalindrome = isPalindromeString(input);
  res.json({ isPalindrome });
});

// Check if a string contains a substring
app.get('/string-match', (req, res) => {
  const input = req.query.input;
  const substring = req.query.substring;
  const containsSubstring = input.includes(substring);
  res.json({ containsSubstring });
});

// Add two numbers
app.get('/addition', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;
  res.json({ result });
});

// Calculate factorial of a number
app.get('/factorial', (req, res) => {
  const num = parseInt(req.query.num);
  const result = factorial(num);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Helper function to check if a string is a palindrome
function isPalindromeString(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Helper function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

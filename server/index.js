const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root API
app.get('/', (req, res) => {
  res.send('Hello Travel Geeks Bd');
});

app.listen(port, () => {
  console.log('Server running');
});

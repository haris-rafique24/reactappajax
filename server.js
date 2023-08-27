const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Set up a route that returns JSON data
app.get('/data', (req, res) => {
  const updatedData = {
    data: new Date().toLocaleTimeString()
  };
  res.json(updatedData);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

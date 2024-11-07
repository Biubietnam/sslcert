const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the Express app
const app = express();

// Serve the file at .well-known/pki-validation/667DBC4EC7A7166392EAE0ED78631428.txt
app.get('/.well-known/pki-validation/667DBC4EC7A7166392EAE0ED78631428.txt', (req, res) => {
    const filePath = path.join(__dirname, '.well-known', 'pki-validation', '667DBC4EC7A7166392EAE0ED78631428.txt');
  
  // Check if the file exists, then send it
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

// Start HTTP server on port 80
http.createServer(app).listen(80, () => {
  console.log('Server is running on http://localhost:80');
});

const express = require('express');
const PORT = 8000;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World! A new commit was made! It should trigger a Jenkins Build!');
});
app.listen(PORT);
console.log(`Running on ${PORT}`);

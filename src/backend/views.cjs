const express = require('express');
const app = express();
const cors = require('cors');

let viewCount = 0; // Initial view count

app.use(cors());

app.get('/increment-view', (req, res) => {
  viewCount += 1;
  res.json({ viewCount });
});

app.listen(5173, () => {
  console.log('Server is running on port 5173');
});

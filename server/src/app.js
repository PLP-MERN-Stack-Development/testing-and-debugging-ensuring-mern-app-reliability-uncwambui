const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');

app.use(express.json());
app.use('/api/posts', postsRouter);

app.get('/api/message', (req, res) => {
  res.json({ message: 'Server is running successfully' });
});

module.exports = app;

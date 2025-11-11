const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, title: 'Hello World' },
  { id: 2, title: 'Testing with Jest' }
];

router.get('/', (req, res) => res.json(posts));

module.exports = router;

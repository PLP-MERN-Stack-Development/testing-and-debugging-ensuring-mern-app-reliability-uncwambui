const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'testsecret';

exports.generateToken = (user) => jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
exports.verifyToken = (token) => jwt.verify(token, SECRET);

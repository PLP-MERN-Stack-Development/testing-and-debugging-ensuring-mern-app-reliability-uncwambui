const app = require('./src/app');

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}
module.exports = app;

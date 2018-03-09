const path = require('path');
const Express = require('express');
const cors = require('cors');

const app = new Express();
const port = process.env.PORT || 8080;

const distDir = path.join(__dirname, 'dist');

const corsOptions = {
  origin: 'https://shepherd-alpha.herokuapp.com',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(Express.static(distDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port %s, Ctrl+C to stop', port);
});

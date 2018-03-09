import path from 'path';
import Express from 'express';
import cors from 'cors';

const app = new Express();
const port = 80;

const distDir = path.join(__dirname, 'dist');

const corsOptions = {
  origin: 'http://shepherd-alpha.herokuapp.com',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(Express.static(path.join(__dirname, distDir)));

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});
app.listen(port);

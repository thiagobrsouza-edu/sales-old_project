import 'express-async-errors'
import morgan from 'morgan';
import express from 'express';

const app = express();
app.use(express.json());

app.use(morgan('dev'));

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
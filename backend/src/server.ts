import 'express-async-errors'
import morgan from 'morgan';
import express from 'express';
import { handleError } from './middlewares/handleError';
import { routes } from './routes';

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use(handleError);
app.use(routes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
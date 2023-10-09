import 'module-alias/register';

import '@config/environment';

import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import cors from 'cors';

import { errorHandler } from '@middlewares';
import { emailsRouter } from '@routes';

const app = express();
const port = process.env.PORT || 8080;

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(morgan('dev'));
app.use(cors());

app.use('/email', emailsRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

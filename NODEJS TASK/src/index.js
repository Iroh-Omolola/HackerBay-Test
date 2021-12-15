import express from 'express';
import cors from 'cors';

import AuthRoute from './route/auth.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'hello world',
  });
});


app.use('/api/v1/auth', AuthRoute);

export default app
import express from 'express';
import cors from 'cors';
import AuthRoute from './route/auth.js';
import JsonPatchRoute from './route/jsonPatchFeature.js';
import ImageRoute from './route/thumbnailFeature.js';

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
app.use('/api/v1/json-patch', JsonPatchRoute);
app.use('/api/v1/thumbnail', ImageRoute);

export default app
import express from 'express';
import {helloWorld} from './routes';

const app = express();

app.get('/', helloWorld);

app.get('/', )
app.listen(3333);
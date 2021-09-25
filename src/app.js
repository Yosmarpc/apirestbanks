import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './Routers';

const app = express();

export const PORT = process.env.PORT || 5000;

app.set('port', PORT);
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

export default app;
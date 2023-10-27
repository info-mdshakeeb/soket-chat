
import express from 'express';
import cors from 'cors';
import envConfig from './utils/env.config';
import globalError from './middlewares/globalError';
import notFound from './middlewares/notFound';

//initial app
const app = express();

app.use(express.json())
app.use(cors())

//test server
app.get('/', (req, res) => {
  res.send('server is running')
})


// error handler
app.use(globalError)
app.use(notFound)



app.listen(envConfig.port, () => console.log(`app is running port ${envConfig.port}`))
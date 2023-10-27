
import express from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound.js';
import globalError from './middlewares/globalError.js';
import envConfig from './utils/env.config.js';

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
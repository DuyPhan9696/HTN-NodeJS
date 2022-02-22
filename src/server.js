import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web';
require('dotenv').config();


let app = express();
let PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
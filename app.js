require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const { logger } = require('./lib/logger');
const { dynamicLinksGenerator } = require('./lib/dynamicLinksGenerator');

app.use(bodyParser.json())
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.get('/', function (req, res) {
    res.send({
        name: process.env.APP_NAME,
        version: process.env.APP_VERSION
    });
});

app.post('/short-url', async (req, res) => {
    const result = await dynamicLinksGenerator(req.body.url);
    res.send(result);
});

app.listen(Number(process.env.APP_PORT), () => {
    logger.info(`Shorten URL app started on port: ${process.env.APP_PORT}`);
});
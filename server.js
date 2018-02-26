const express = require('express');
// App
const app = express();
const config = require('./server/config/config');
const api = require('./server/apis');
const logger = require('./server/utils/logger');
const auth = require('./server/auth/routes');
const errorHandler = require('./server/utils/errorHandler');
// connect to mongoDB
require('mongoose').connect(config.db.url);
// setup the app middlware
require('./server/middlewares/appMiddlware')(app);
// port
const port = process.env.PORT || config.port;
// setup the api
app.use('/api', api);
app.use('/auth', auth);
// Abstract error handling function.
errorHandler(app);
// Listen
app.listen(config.port);
logger.log(`listening on http://localhost:${port}`);

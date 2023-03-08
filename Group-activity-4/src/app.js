var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var swaggerUI = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var swaggerOptions = {
    explorer: true,
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

module.exports = app;

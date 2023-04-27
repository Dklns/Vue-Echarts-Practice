const express = require('express');
const chartOne = require('./router/one');
const chartTwo = require('./router/two');
const chartThree = require('./router/three');
const chartFour = require('./router/four');
const mapRoute = require('./router/map');

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})

app.use('/one', chartOne);
app.use('/two', chartTwo);
app.use('/three', chartThree);
app.use('/four', chartFour);
app.use('/map', mapRoute);

app.listen(8800, () => {
    console.log("app is listening");
});
const router = require('express').Router();
const chartData = require('../mock/four.json');

router.get('/data', (req, res) => {
    res.send({
        msg: "this is four",
        chartData
    })
})

module.exports = router;
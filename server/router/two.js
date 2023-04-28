const router = require('express').Router();
const chartData = require('../mock/two.json');

router.get('/data', (req, res) => {
    res.send({
        msg: "this is two",
        chartData
    })
})

module.exports = router;
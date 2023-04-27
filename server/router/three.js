const router = require('express').Router();
const chartData = require('../mock/three.json');

router.get('/data', (req, res) => {
    res.send({
        msg: "this is three",
        chartData
    })
})

module.exports = router;
const router = require('express').Router();
const oneData = require('../mock/one.json');

router.get('/data', (req, res) => {
    res.send({
        msg: "this is one",
        chartData: oneData
    })
})

module.exports = router;
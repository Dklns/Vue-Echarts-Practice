const router = require('express').Router();
const chinaMap = require('../mock/china.json');

router.get('/china', (req, res) => {
    res.send({
        msg: "this is china",
        chinaMap
    })
})

module.exports = router;
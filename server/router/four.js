const router = require('express').Router();

router.get('/data', (req, res) => {
    res.send({
        msg: "this is four"
    })
})

module.exports = router;
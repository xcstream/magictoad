/**
 * Created by xucheng on 2016/12/9.
 */
/**
 * Created by xucheng on 16/11/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
    res.render('index')
})


module.exports = router
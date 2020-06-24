var express = require('express');
var router = express.Router();
var sendMail = require('./mail');
const { text } = require('express');
const { log } = console;
router.get('/',function (req, res) {
    res.render('index');
});
router.post('/email', (req, res) => {
    const { name,phonenumber,email,message } = req.body;
    log('Data: ', req.body);
    // var data2 =JSON.stringify(req.body);
    sendMail(name,phonenumber,email,message,function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});

module.exports=router;
var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/' , async (req, res) => {
    const latitude = Math.random() * 180 - 90;
    const longitude = Math.random() * 360 - 180;
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    request({'url': `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=https://maps.apple.com/frame?map=${encodeURIComponent(`transit&center=${latitude},${longitude}`)}`, 'encoding': null }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.set('Content-Type', 'image/png');
            res.send(body);
        }
    });
});

module.exports = router;
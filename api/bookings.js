var express = require('express');
var router = express.Router();
var bookingService = require('../services/bookingService');

router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  bookingService.getBookings(callback);
});

router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var booking = req.body;
  bookingService.addBooking(booking, callback);
});

module.exports = router;


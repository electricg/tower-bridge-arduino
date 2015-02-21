var five = require('johnny-five');
var board = new five.Board();
var Stepper = five.Stepper;
var STEP = 512; // do not change this - how many tik to complete one revolution
var RPM = 30; // speed - revolutions per minute - over 45 it doesn't pretty much work
var config = {
  type: Stepper.TYPE.FOUR_WIRE,
  stepsPerRev: STEP,
  pins: [ 12, 11, 10, 9 ]
};

var socket = require('socket.io-client')('http://localhost:8081');

socket.on('disconnect', function() {
  socket.emit('board', {
    status: 'disconnected'
  });
});

socket.on('move', function(e) {
    board.emit('move', e.dir);
    console.log('got a move');
});



board.on('ready', function() {
  socket.emit('board', { status: 'ready' });

  var stepper = new Stepper(config);
  board.on('move', function(dir) {
    var wise = Stepper.DIRECTION.CCW;
    if (dir === 'down') {
      wise = Stepper.DIRECTION.CW;
    }
    stepper.rpm(RPM).direction(wise).step(STEP * 1, function() {
      console.log('moving ' + dir);
    });
  });
});
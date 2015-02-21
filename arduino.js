var five = require('johnny-five');
var board = new five.Board();
var Stepper = five.Stepper;
var STEP = 512; // do not change this - how many tik to complete one revolution
var RPM = 30; // speed - revolutions per minute - over 45 it doesn't pretty much work
var REV = 1;
var config = {
  type: Stepper.TYPE.FOUR_WIRE,
  stepsPerRev: STEP,
  pins: [ 12, 11, 10, 9 ]
};

var url = 'http://localhost:8081';
var socket = require('socket.io-client')(url + '/arduino');

board.on('ready', function() {
  socket
    .on('connect', function() {
      // console.log('connected');
      socket.emit('board', { status: 'ready' });
    })
    .on('move', function(e) {
        board.emit('move', e.dir);
    });

  socket.emit('board', { status: 'ready' });

  var stepper = new Stepper(config);
  
  board.on('move', function(dir) {
    socket.emit('board', { status: 'moving', dir: dir });

    var wise = Stepper.DIRECTION.CCW;
    if (dir === 'down') {
      wise = Stepper.DIRECTION.CW;
    }
    stepper.rpm(RPM).direction(wise).step(STEP * REV, function() {
      socket.emit('board', { status: 'ready' });
    });
  });
});
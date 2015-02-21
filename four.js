var STEP = 512; // do not change this - how many tik to complete one revolution
var RPM = 30; // speed - revolutions per minute - over 45 it doesn't pretty much work


var five = require('johnny-five');
var board = new five.Board();
var Stepper = five.Stepper;

board.on('ready', function() {
  var config = {
    type: Stepper.TYPE.FOUR_WIRE,
    stepsPerRev: STEP,
    pins: [ 12, 11, 10, 9 ]
  };

  var stepper = new Stepper(config);

  stepper.rpm(RPM).direction(Stepper.DIRECTION.CCW).step(STEP * 2, function() {
    console.log('done moving CCW');

    stepper.step({
      steps: STEP * 2,
      direction: Stepper.DIRECTION.CW
    }, function() {
      console.log('done moving CW');
    });
  });
});
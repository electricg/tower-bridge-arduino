
* Download latest Arduino IDE http://arduino.cc/en/Main/Software
* Install Arduino IDE
* Open Arduino IDE
* Connect Arduino to the computer
* Select board (Arduino Yun) and port (/dev/tty.usbmodemfd131)
* Download AdvancedFirmata to add additional functionality such as Stepper motor support https://github.com/soundanalogous/AdvancedFirmata
  * git clone https://github.com/soundanalogous/AdvancedFirmata.git
  * open file AdvancedFirmata.ino from Arduino IDE
  * verify and upload
* Install Johnny-Five https://github.com/rwaldron/johnny-five
  * npm install johnny-five (or sudo it)


* Breadboard layout from https://learn.adafruit.com/adafruit-arduino-lesson-16-stepper-motors/breadboard-layout
* These are the stepper specs http://www.adafruit.com/product/858


## About Arduino Yun

* to clone a githutb repository, use git://github.com/... instead of http:// or https:// - source http://stackoverflow.com/a/8417235/471720
* to use nano from OSX Terminal run `TERM=xterm-color` - source http://www.instructables.com/id/Using-nano-instead-of-vi-on-your-Arduino-Yun/
* nino-io at the moment doesn't work on Arduino Yun as it is - issue https://github.com/rwaldron/nino-io/issues/2
* slide library is reveal.js - repo https://github.com/hakimel/reveal.js
* run a simple http server `python -m SimpleHTTPServer 8000` - https://gist.github.com/electricg/c406415be988c5a05172
* install LininoOS: http://wiki.linino.org/doku.php?id=wiki:upgradeimage
* install node.js on Arduino Yun: http://wiki.linino.org/doku.php?id=wiki:nodejscript
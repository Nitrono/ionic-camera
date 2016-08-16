
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var AudioProcessor = function() {
};

AudioProcessor.start = function(successCallback, errorCallback, param) {
  exec(successCallback, errorCallback, "CameraModule", "start", [param]);
};

AudioProcessor.stop = function(successCallback, errorCallback, param) {
  exec(successCallback, errorCallback, "CameraModule", "stop", [param]);
};


module.exports = AudioProcessor;




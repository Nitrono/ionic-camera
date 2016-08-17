
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var CameraModule = function() {
};

CameraModule.getPicture = function(successCallback, errorCallback, param) {
  exec(successCallback, errorCallback, "CameraModule", "getPicture", [param]);
};

module.exports = CameraModule;




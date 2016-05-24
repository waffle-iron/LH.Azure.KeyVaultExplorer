'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.commandLine.appendSwitch('allow-file-access');

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.setMenu(null);
    mainWindow.loadUrl('file://' + __dirname + '/views/index.html');
});
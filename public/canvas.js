var canvas = document.getElementById('video-canvas');
var url = 'ws://'+document.location.hostname+':8082/';
var player = new JSMpeg.Player(url, {canvas: canvas});
console.log("in canvas");

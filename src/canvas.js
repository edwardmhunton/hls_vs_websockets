var canvas = document.getElementById('video-canvas');
var url = 'ws://'+document.location.hostname+':8082/supersecret';
var player = new JSMpeg.Player(url, {canvas: canvas});
console.log(url);

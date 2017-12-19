requires latest version of FFMpeg, node 5

uses video.js (http://videojs.com/) and jsmpeg.js (https://github.com/phoboslab/jsmpeg) for browser playback

for websocket run these commands from root unless specified

1) node server/websocket-relay.js supersecret 8081 8082 

2) in server folder run http-server

3) run shell_scripts/websocks.sh

for hls

run shell_scripts/hls.sh

for dash 

run shell_scripts/dash.sh

for webpage + players

run npm start






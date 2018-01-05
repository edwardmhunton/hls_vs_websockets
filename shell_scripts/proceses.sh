killall node
cd .. &
npm start &
cd server &
http-server &
cd server &
node websocket-relay.js supersecret 8081 8082 &
cd shell_scripts &
sh hls.sh &
wait
cd shell_scripts &
sh dash.sh &
wait
cd shell_scripts &
sh websocks.sh &
wait

#!/bin/bash
ffmpeg -f avfoundation -video_size 320x240 -framerate 30 -i 1 -f mpegts -codec:v mpeg1video -s 320x240 -b:v 300 -bf 0 http://127.0.0.1:8081/supersecret

#!/bin/bash
ffmpeg -f avfoundation -r 30 -i 1 -pix_fmt yuv420p -vcodec libx264 -keyint_min 0 -g 30 -b:v 300k -ac 2 -strict 2 -acodec aac -ab 64k  -f dash -min_seg_duration 1000 -use_template 1 -use_timeline 0 -init_seg_name init-\$RepresentationID\$.mp4 -media_seg_name test-\$RepresentationID\$-\$Number\$.mp4 ../public/dash_content/webcam.mpd



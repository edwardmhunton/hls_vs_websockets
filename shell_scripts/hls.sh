#!/bin/bash
ffmpeg -f avfoundation -r 30 -i 1 -pix_fmt yuv420p -vcodec libx264 -acodec libfaac -r 30 -profile:v baseline -b:v 300k -maxrate 500k -force_key_frames 30  -map 0 -flags -global_header -hls_time 1 -hls_flags delete_segments+split_by_time -hls_list_size 10 -hls_wrap 10 -start_number 0 -hls_flags program_date_time -hls_playlist_type event ../public/hls_content/newStreamindex.m3u8


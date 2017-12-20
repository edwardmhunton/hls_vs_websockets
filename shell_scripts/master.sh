#!/bin/bash
sh hls.sh & wait
sh dash.sh & wait
sh websocks.sh & wait

node 

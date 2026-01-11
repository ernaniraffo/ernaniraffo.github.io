#!/bin/bash

pkill -f "server.py"
python3 server.py -d docs --bind 127.0.0.1

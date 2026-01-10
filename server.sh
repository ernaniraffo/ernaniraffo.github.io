#!/bin/bash

pkill -f "server.py"
which python3
python3 server.py -d docs --bind 127.0.0.1

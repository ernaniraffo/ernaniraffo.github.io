#!/bin/bash

pkill -f "http.server"
python3 server.py -d docs 

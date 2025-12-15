#!/bin/bash

pkill -f "http.server"
echo "Starting server at http://localhost:8000"
python3 -m http.server -d docs

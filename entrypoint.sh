#!/bin/sh

# Create the build directory on the host machine if it does not exist
mkdir -p /host/build

# Copy all files from the build directory to the host machine
rsync -av --progress --recursive /app/build/ /host/build
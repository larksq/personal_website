#!/bin/bash

# Build the project
npm run build

# Copy the video file to the dist assets folder
cp assets/bg_video.mp4 dist/assets/

echo "Build complete! Static files are in the dist/ folder." 
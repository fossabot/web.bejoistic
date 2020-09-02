#!/usr/bin/env bash

CURRENT_DATE=$(date +"%Y-%m-%d")
BUILD_HASH=$(echo -n $(date +"%s") | md5sum | awk '{print $1}')

echo "{ \"date\": \"$CURRENT_DATE\", \"buildNumber\": \"$BUILD_HASH\" }" > src/resources/last-updated.json
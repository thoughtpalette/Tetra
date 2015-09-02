#!/bin/bash

export DISPLAY=:10

Xvfb :10 -screen 0 1366x768x24 -ac &
PIDS[0]=$!

#google-chrome --remote-debugging-port=9222 &
#PIDS[1]=$!

node server &
PIDS[2]=$!
sleep 2

npm test

RESULT=$?

cat ./coverage/net/lcov.info | ./node_modules/codecov.io/bin/codecov.io.js

for i in "${PIDS[@]}"
do
    if ! kill $i > /dev/null 2>&1; then
        echo "SIGTERM fail on process $i" >&2
    fi
done

exit $RESULT


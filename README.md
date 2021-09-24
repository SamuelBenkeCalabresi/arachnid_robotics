# Arachnid Robotics

<img alt="Logo" align="right" src="https://cdn.trendhunterstatic.com/thumbs/mini-robot.jpeg" width="30%" />

Welcome to Arachnid Robotics, delivering you Robot Spiders(TM) for all your robotic spider needs.

## Quick Overview

The main assumption is that Mk1 robots when moving on the test chamber have an infinite grid
i.e. if the message has infinite instructions the robot will move anywhere,
and that means also minus x, y coordinates are valid for the robot to move on the grid.

Another assumption is that the message in input in the robot needs to be cleaned.

The last assumption done is that the returned value from the interface that returns the coordinates (generatePosition) is a tuple.

Requirements of the coordinates:
x = height
y = width
f = forwards = +1 x, +0y
b = backwards = -1 x, +0y
l = left = +0x, -1y
r = right = +0x, +1y

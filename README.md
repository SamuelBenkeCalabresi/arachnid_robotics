# Arachnid Robotics

<img alt="Logo" align="right" src="https://cdn.trendhunterstatic.com/thumbs/mini-robot.jpeg" width="30%" />

Welcome to Arachnid Robotics, delivering you Robot Spiders(TM) for all your robotic spider needs.

## Quick Overview MK1

The main assumption is that Mk1 robots when moving on the test chamber have an infinite grid
i.e. if the message has infinite instructions the robot will move anywhere,
and that means also minus x, y coordinates are valid for the robot to move on the grid.

Another assumption is that the message in input in the robot needs to be cleaned.

The last assumption done is that the returned value from the interface that returns the coordinates (generatePosition) is a tuple.

Requirements of the coordinates:
x = height
y = width
f = forwards = +1x, +0y
b = backwards = -1x, +0y
l = left = +0x, -1y
r = right = +0x, +1y

## Quick Overview MK2

The code was refactored keeping the MK1 functionality but to be able to use multiple versions of MK in a scalable and more formal way than just one module of functions: welcome to the Robot abstract class, the 2 versions of MK (MK1, MK2) are extensions of Robot that override the abstract method positionControl to move in their different ways the robots.

Requirements:

L or R commands will now rotate the robot 90 degrees to the left or right, so now the F (Forwards) command will go in the direction the robot is facing.

so need to store the direction and need to get the strings and make movements in different ways

Management also thought the robot going backwards blindly was a bad idea after we lost that one into the fire pit, so now we need to turn it around and go in the direction we're facing if we need to head back the way we came.

The robot should ignore a command asking it to go into negative space.

We still need to support the 500 MK1.

### First brainstorming MK2

l/r/b -> update variable storing the direction:
e.g. l -> means next f I update +0x, -1y
ll -> means next f I update like backwards -1x, +0y
backwards b -> turn opposite direction

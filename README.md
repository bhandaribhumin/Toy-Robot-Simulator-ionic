Toy robot simulator written in ionic5

---

## Installation

Environment: ionic, cordova

Clone this Repo

> \$ git clone https://github.com/bhandaribhumin/Toy-Robot-Simulator.git

In root of the app run npm install

> \$ npm i

---

## Usage

Run the program from the app root

> \$ ionic serve

| Commands    | Description                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| PLACE X Y F | Place the robot on the table at coordinates x,y and facing the direction f. Valid x andy values are between 0-4. |

Valid directions are WEST, NORTH, EAST, SOUTH. Example Input: "PLACE 0 0 NORTH"
MOVE | Move the robot forward 1 step in the direction it is facing.
LEFT | Turn the robot's direction 90 degress to the left. I.e. if the robot is facing NORTH, 1 left turn will turn the robot's direction to WEST.
RIGHT | Turn the robot's direction 90 degress to the right. I.e. if the robot is facing NORTH, 1 left turn will turn the robot's direction to EAST.
REPORT | Output the current position of the robot. Example Output: "Output: 4, 0, EAST"

---

Create an application that can read in commands of the following form - PLACE X Y F | MOVE | LEFT | RIGHT | REPORT

**Description**

- The application is a simulation of a toy robot moving on a square tabletop, of
  dimensions 5 units x 5 units.

- There are no other obstructions on the table surface.

- The robot is free to roam around the surface of the table, but must be prevented from
  falling to destruction. Any movement that would result in the robot falling from the
  table must be prevented, however further valid movement commands must still be
  allowed.

- Create an application that can read in commands of the following form:
  ○ PLACE X,Y,F
  ○ MOVE
  ○ LEFT
  ○ RIGHT
  ○ REPORT

- PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH,
  EAST or WEST.

- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence
  of commands may be issued, in any order, including another PLACE command. The
  application should discard all commands in the sequence until a valid PLACE
  command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but
  standard output is sufficient.
- A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and
  REPORT commands.
- Input can be from a file, from standard input or through a UI with four buttons and
  scrolling log of the result, as the developer chooses. (This might depend on the dev
  stack you use)
- Provide test data to exercise the application.

### Constraints

The toy robot must not fall off the table during movement. This also includes the
initial placement of the toy robot.

Any move that would cause the robot to fall must be ignored.

Example Input and Output:

i.

> PLACE 0 0 NORTH
> MOVE
> REPORT
> Output: 0,1,NORTH

ii.

> PLACE 0 0 NORTH
> LEFT
> REPORT
> Output: 0,0,WEST

iii.

> PLACE 1 2 EAST
> MOVE
> MOVE
> LEFT
> MOVE
> REPORT
> Output: 3,3,NORTH

// function that determines how far away a destination is based on the directions given

const blocksAway = function (directions) {
  // object that defines the new direction the taxi driver would have after completing an instruction
  let direction;
  const newDirection = {
    undefined: { right: "east", left: "north" },
    east: { right: "south", left: "north" },
    west: { right: "north", left: "south" },
    north: { right: "east", left: "west" },
    south: { right: "west", left: "east" }
  }

  let position = [0, 0];
  let turn;
  let times;

  for (let instruction of directions) {
    // check whether the instruction given was a turn or the number of blocks the taxi driver should drive
    if (typeof instruction === "string") {
      turn = instruction;
    } else if (typeof instruction === "number") {
      times = instruction;
    }

    // update the current direction and position according to the previous direction and the given instructions
    if (turn && times) {
      direction = newDirection[direction][turn];
      switch (direction) {
        case "north":
          position[1] += 1 * times;
          break;
        case "south":
          position[1] -= 1 * times;
          break;
        case "east":
          position[0] += 1 * times;
          break;
        case "west":
          position[0] -= 1 * times;
          break;
      }
      turn = undefined;
      times = undefined;
    }
  }
  let formattedPosition = { east: position[0], north: position[1] };
  return formattedPosition;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
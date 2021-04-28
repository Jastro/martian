import { ProblemInput } from "../core/problem.input";

export class InputParser {
  static fromString(input) {
    const lines = input.split("\r\n");
    const world = lines.shift();
    const [width, height] = world.split(" ");

    const instances = [];
    for (let i = 0; i < lines.length; i += 3) {
      const [x, y, orientation] = lines[i].split(" ");
      instances.push({
        position: {
          x: parseInt(x),
          y: parseInt(y),
        },
        orientation,
        commands: lines[i + 1].split(""),
      });
    }

    return new ProblemInput({
      world: {
        width: parseInt(width),
        height: parseInt(height),
      },
      instances,
    });
  }
}

export class OutputPrinter {
  static fromRobots({ robots }) {
    return robots
      .map(
        (robot) =>
          `${robot.position.x} ${robot.position.y} ${robot.orientation}${
            robot.isLost ? " LOST" : ""
          }`
      )
      .join("\n");
  }
}

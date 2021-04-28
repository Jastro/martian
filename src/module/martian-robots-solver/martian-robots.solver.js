import { WorldEntity } from "./entity/world.entity";
import { RobotEntity } from "./entity/robot.entity";

export class MartianRobotsSolver {
  constructor({ input }) {
    this.input = input;

    this.world = new WorldEntity(this.input.world);
  }

  solveInstance({ instance }) {
    const robot = new RobotEntity({
      position: instance.position,
      orientation: instance.orientation,
      world: this.world,
    });

    for (const command of instance.commands) {
      const commands = {
        R: "rotateRight",
        F: "moveForward",
        L: "rotateLeft",
      };

      robot[commands[command]]();
    }

    return robot;
  }

  solve() {
    return this.input.instances.map((instance) =>
      this.solveInstance({ instance })
    );
  }
}

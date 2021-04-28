const ORIENTATION_MAP = ['N', 'E', 'S', 'W'];
const ORIENTATION_VECTOR = {
    'N': {x: 0, y: 1},
    'E': {x: 1, y: 0},
    'S': {x: 0, y: -1},
    'W': {x: -1, y: 0},
};

export class RobotEntity {
    constructor({position, orientation, world}) {
        this.orientation = orientation
        this.position = position;

        this.isLost = false;

        this.world = world;
    }

    rotateLeft() {
        // We use +3 instead -1 since we have to deal with negative numbers.
        const orientationIndex = ORIENTATION_MAP.indexOf(this.orientation);
        this.orientation = ORIENTATION_MAP[(orientationIndex + 3) % 4];
    }

    rotateRight() {
        const orientationIndex = ORIENTATION_MAP.indexOf(this.orientation);
        this.orientation = ORIENTATION_MAP[(orientationIndex + 1) % 4];
    }

    moveForward() {
        if (this.isLost) return;

        const movementVector = ORIENTATION_VECTOR[this.orientation];
        const finalPosition = {
            x: this.position.x + movementVector.x,
            y: this.position.y + movementVector.y,
        }

        if (this.world.isValidPosition({position: finalPosition})) {
            this.position = finalPosition;
        } else {
            if (!this.world.hasScent({position: this.position})) {
                this.isLost = true;
                this.world.setScent({position: this.position});
            }
        }
    }
}
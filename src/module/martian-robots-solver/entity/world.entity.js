export class WorldEntity {
    constructor({width, height}) {
        this.width = width;
        this.heigth = height;

        this.grid = Array(width).fill(Array(height).fill(false));
    }

    isValidPosition({position: {x, y}}) {
        return (x >= 0 && x <= this.width)
            && (y >= 0 && y <= this.heigth);
    }

    hasScent({position: {x, y}}) {
        return this.grid[x][y];
    }

    setScent({position: {x, y}}) {
        this.grid[x][y] = true;
    }
}
// Vectors are used to describe directions, and points in space.

export class Vector2D {
    x: number;
    y: number;
    matrix: number[];

    constructor(matrix: number[]) {
        this.x = matrix[0];
        this.y = matrix[1];
        this.matrix = matrix;
    }
}

export class Vector3D {
    x: number;
    y: number;
    z: number;
    matrix: number[];

    constructor(matrix: number[]) {
        this.x = matrix[0];
        this.y = matrix[1];
        this.z = matrix[2];
        this.matrix = matrix;
    }
}
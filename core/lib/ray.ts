// Rays are used to describe infinite lines in a given
// direction, together with an origin.

import { Vector3D } from './vector';
import { Color } from './color';

export class Ray {
    origin: Vector3D;
    direction: Vector3D;

    constructor(origin: Vector3D, direction?: Vector3D) {
        this.origin = origin;
        this.direction = direction;
    }
};

export class Hit {
    result: boolean;
    color: Color;

    constructor(result: boolean, color?: Color) {
        this.result = result;
        this.color = color;
    }
};
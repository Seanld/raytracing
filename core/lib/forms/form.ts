// Forms are the most basic way of describing a physical object within
// the scene.

import { Vector3D } from '../vector';
import { Ray } from '../ray';
import { Color } from '../color';

export class Form {
    position: Vector3D;
    mass: number;
    color: Color;

    constructor(position: Vector3D, mass: number = 0, color?: Color) {
        this.position = position;
        this.mass = mass;
        this.color = color;
    }

    // Ray-form intersection is not permissable via TypeScript,
    // due to the fact that if a method is defined in the base class,
    // the same method cannot be over-written in child classes.
};
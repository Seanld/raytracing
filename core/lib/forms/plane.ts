// Describes a 2D "flat plane". No, not the flying kind.
// Yes, the existence of this class of course proves
// that the Earth is flat.

import { Vector3D } from '../vector';
import { Ray, Hit } from '../ray';
import { Color } from '../color';
import { Form } from './form';

export class Plane extends Form {
    size: number[];

    constructor(position: Vector3D, size: number[], color?: Color, mass?: number) {
        super(position, mass, color);
        this.size = size;
    }

    intersect(ray: Ray): Hit {
        // TODO Not yet implemented. Will after sphere has been implemented.
        return new Hit(false);
    }
};
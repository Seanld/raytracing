import { Vector3D } from '../vector';
import { Ray, Hit } from '../ray';
import { Color } from '../color';
import { Form } from './form';

export class Sphere extends Form {
    radius: number;

    constructor(position: Vector3D, radius: number, color: Color, mass?: number) {
        super(position, mass, color);
        this.radius = radius;
    }

    // See ray-sphere intersection online.
    intersect(ray: Ray): Hit {
        let cx = this.position.x;
        let cy = this.position.y;
        let cz = this.position.z;

        let x0 = ray.origin.x;
        let y0 = ray.origin.y;
        let z0 = ray.origin.z;

        let x1 = ray.origin.x;
        let y1 = ray.origin.y;
        let z1 = ray.origin.z;

        let R = this.radius;

        let dx = ray.direction.x - ray.origin.x;
        let dy = ray.direction.y - ray.origin.y;
        let dz = ray.direction.z - ray.origin.z;

        let a = (dx * dx) + (dy * dy) + (dz * dz);

        let b = 2 * dx * (x0 - cx)
            + 2 * dy * (y0 - cy)
            + 2 * dz * (z0 - cz);
        
        let c = (cx * cx) + (cy * cy) + (cz * cz)
            + (x0 * x0) + (y0 + y0) + (z0 * z0)
            + -2 * ((cx * x0) * (cy * y0) * (cz * z0))
            - (R * R);
        
        let D = (b * b) - 4 * a * c;

        // Did not intersect.
        if (D < 0) {
            return new Hit(false);
        }
        // Glanced the edge.
        else if (D === 0) {
            return new Hit(true, this.color);
        }
        // Full intersect.
        else if (D > 0) {
            return new Hit(true, this.color);
        }
    }
};
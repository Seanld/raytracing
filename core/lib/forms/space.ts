// A space is an object that represents the overall rendering area.

import * as fs from 'fs';
import { Camera } from './camera/camera';
import { Sphere } from './sphere';
import { Plane } from './plane';

export class Space {
    objects: any[];
    mainCam: Camera;

    constructor(objects: any[] = [], mainCam?: Camera) {
        this.objects = objects;
        this.mainCam = mainCam;
    }

    // Load a space from a JSON file.
    loadFromFile(path: string) {
        let data = JSON.parse(fs.readFileSync(path));

        for (let obj of data.objects) {
            let newObj;

            if (obj.type === 'sphere') {
                newObj = new Sphere(
                    obj.position,
                    obj.radius,
                    obj.color,
                    obj.mass
                );
            }

            else if (obj.type === 'Plane') {
                newObj = new Plane(
                    obj.position,
                    obj.size,
                    obj.color,
                    obj.mass
                );
            }

            else {
                throw new Error(`Unknown object attempting to load from '${path}'`);
            }

            this.objects.push(newObj);
        }
    }
};
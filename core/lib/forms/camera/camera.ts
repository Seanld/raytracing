import { Vector2D, Vector3D } from '../../vector';
import { Color } from '../../color';
import { Form } from '../form';
import { Plane } from '../plane';
import { Sphere } from '../sphere';
import { Ray } from '../../ray';

export class Camera extends Form {
    screen: Screen;

    constructor(position: Vector3D, screen: Screen, mass?: number) {
        super(position, mass);
        this.screen = screen;
    }

    // TODO Implement renderer.
    render(objects: Sphere[]|Plane[]): Color[][] {
        let pixelPositions = this.screen.getPixelPositions(this);
        let finalColors = [];

        for (let pixelRow of pixelPositions) {
            let colorRow = [];

            for (let pixelPos of pixelRow) {
                // Now we draw a ray from camera through pixel.
                let newRay = new Ray(
                    this.position,
                    new Vector3D([pixelPos.x, pixelPos.y, this.position.z])
                );

                // Test for global collisions. Very inefficient.
                // TODO Optimize ray-collision testing.
                for (let obj of objects) {
                    // Calculate intersection.
                    let intersectResult = obj.intersect(newRay);

                    // If an intersection is found, push color to row.
                    if (intersectResult.result === true) {
                        colorRow.push(intersectResult.color);
                    } else {
                        // Background color, as no intersections are found.
                        // TODO make this not hard-coded.
                        colorRow.push(new Color(0, 0, 0));
                    }
                }
            }

            finalColors.push(colorRow);
        }

        return finalColors;
    }
};

export class Screen extends Plane {
    res: Vector2D;
    pixelSize: Vector2D;

    constructor(position: Vector3D, size: Vector2D, res: Vector2D) {
        super(position, size);
        this.res = res;
        this.pixelSize = new Vector2D([
            this.size.x / this.res.x,
            this.size.y / this.res.y
        ]);
    }

    // Generates 2D array of positions where each emulated pixel is located.
    // These are used to draw rays.
    getPixelPositions(cam: Camera): Vector3D[][] {
        let xStart = this.position.x + (this.size.x / 2);
        let yStart = this.position.y + (this.size.y / 2);

        let pixelsArray = [];
        
        // Iterate each pixel position.
        for (let iy = yStart; iy > yStart - this.size.y; iy -= this.pixelSize.y) {
            let pixelRow = [];

            for (let ix = xStart; ix < xStart + this.size.x; ix += this.pixelSize.x) {
                pixelRow.push(ix);
            }

            pixelsArray.push(pixelRow);
        }

        return pixelsArray;
    }
};
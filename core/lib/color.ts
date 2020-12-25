export class Color {
    r: number;
    g: number;
    b: number;

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgbToString(): string {
        return `rgb(${this.r},${this.g},${this.b});`;
    }

    stringToRgb(stringToParse: string): void {
        let copy = stringToParse;

        copy = copy.replace('rgb(', '')
            .replace(')', '')
            .replace(' ', '');
        
        let values = copy.split(', ').map(val => parseFloat(val));

        this.r = values[0];
        this.g = values[1];
        this.b = values[2];
    }
};
export interface IState {
    x: number;
    y: number;
}

export class State implements IState {
    x: number;
    y: number;
    private xCapacity: number;
    private yCapacity: number;

    constructor(x: number, y: number, xCapacity: number, yCapacity: number) {
        this.x = x;
        this.y = y;
        this.xCapacity = xCapacity;
        this.yCapacity = yCapacity;
    }

    clone(): State {
        return new State(this.x, this.y, this.xCapacity, this.yCapacity);
    }

    foundMeasure(z: number): boolean {
        return (this.x == z || this.y == z);
    }

    transferFromXtoY(toBeTransfered: number) {
        this.x -= toBeTransfered;
        this.y += toBeTransfered;
    }

    isXEmpty(): boolean {
        return this.x == 0;
    }

    isYEmpty(): boolean {
        return this.y == 0;
    }

    isXFull(): boolean {
        return this.x == this.xCapacity;
    }

    isYFull(): boolean {
        return this.y == this.yCapacity;
    }

    fillX() {
        this.x = this.xCapacity;
    }

    emptyY() {
        this.y = 0;
    }
}

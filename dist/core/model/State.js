"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class State {
    constructor(x, y, xCapacity, yCapacity) {
        this.x = x;
        this.y = y;
        this.xCapacity = xCapacity;
        this.yCapacity = yCapacity;
    }
    clone() {
        return new State(this.x, this.y, this.xCapacity, this.yCapacity);
    }
    foundMeasure(z) {
        return (this.x == z || this.y == z);
    }
    transferFromXtoY(toBeTransfered) {
        this.x -= toBeTransfered;
        this.y += toBeTransfered;
    }
    isXEmpty() {
        return this.x == 0;
    }
    isYEmpty() {
        return this.y == 0;
    }
    isXFull() {
        return this.x == this.xCapacity;
    }
    isYFull() {
        return this.y == this.yCapacity;
    }
    fillX() {
        this.x = this.xCapacity;
    }
    emptyY() {
        this.y = 0;
    }
}
exports.State = State;
//# sourceMappingURL=State.js.map